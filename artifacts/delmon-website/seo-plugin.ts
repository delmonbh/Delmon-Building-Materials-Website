import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Plugin } from 'vite';
import { getPageSeo, getSeoTags, getStructuredData, seoPages, siteOrigin, type PageSeo } from './src/lib/seo';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]!);
}

function withSeo(html: string, page: PageSeo) {
  const tags = getSeoTags(page).map(tag =>
    `<meta ${tag.attribute}="${tag.key}" content="${escapeHtml(tag.content)}" />`
  );
  const metadata = [
    `<title>${escapeHtml(page.title)}</title>`,
    ...tags,
    `<link rel="canonical" href="${siteOrigin}${page.path}" />`,
    `<script id="site-structured-data" type="application/ld+json">${JSON.stringify(getStructuredData(page)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
  return html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/,
    `<!-- seo:start -->\n    ${metadata}\n    <!-- seo:end -->`);
}

export function seoPlugin(): Plugin {
  let outputDir: string;
  let isBuild = false;
  return {
    name: 'delmon-static-seo',
    configResolved(config) {
      outputDir = path.resolve(config.root, config.build.outDir);
      isBuild = config.command === 'build';
    },
    transformIndexHtml(html, context) {
      const pathname = (context.originalUrl ?? context.path).split('?')[0];
      return withSeo(html, getPageSeo(pathname));
    },
    async closeBundle() {
      if (!isBuild) return;
      // Render serves a separate HTML entry for each public route so social
      // crawlers get the correct metadata without executing the React app.
      const homeHtml = await readFile(path.join(outputDir, 'index.html'), 'utf8');
      for (const page of seoPages.filter(page => page.path !== '/')) {
        const directory = path.join(outputDir, page.path.slice(1));
        await mkdir(directory, { recursive: true });
        await writeFile(path.join(directory, 'index.html'), withSeo(homeHtml, page));
      }
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoPages.map(page =>
        `  <url><loc>${siteOrigin}${page.path}</loc></url>`
      ).join('\n')}\n</urlset>\n`;
      await writeFile(path.join(outputDir, 'sitemap.xml'), sitemap);
      await writeFile(path.join(outputDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`);
    },
  };
}
