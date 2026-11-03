import { useEffect } from 'react';
import { getPageSeo, getSeoTags, getStructuredData, siteOrigin } from '@/lib/seo';

export function usePageSetup() {
  useEffect(() => {
    const page = getPageSeo(window.location.pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), ''));
    document.title = page.title;
    for (const tag of getSeoTags(page)) {
      let element = document.querySelector<HTMLMetaElement>(`meta[${tag.attribute}="${tag.key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(tag.attribute, tag.key);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteOrigin}${page.path}`;
    let structuredData = document.querySelector<HTMLScriptElement>('#site-structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'site-structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(getStructuredData(page));
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
}
