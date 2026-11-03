export const siteOrigin = 'https://www.delmon-bh.com';
export const socialImage = `${siteOrigin}/delmon-social-preview.jpg`;
export const socialImageAlt = 'Delmon Building Materials. Wholesale and retail construction materials in Bahrain since 1974.';

export const seoPages = [
  {
    path: '/',
    title: 'Delmon Building Materials | Wholesale & Retail in Bahrain',
    description: 'Delmon supplies wholesale and retail building materials in Bahrain. Explore deformed steel, welded wire mesh, timber, plywood and MDF. Established in 1974.',
    heading: 'Building Materials in Bahrain',
    type: 'WebPage',
  },
  {
    path: '/about',
    title: 'About Delmon Building Materials | Bahrain Since 1974',
    description: 'Established in 1974, Delmon Building Materials is a division of Mohamed Jalal & Sons, supplying essential construction materials across the Kingdom of Bahrain.',
    heading: 'About Delmon',
    type: 'AboutPage',
  },
  {
    path: '/products',
    title: 'Steel, Wire Mesh, Wood & Timber in Bahrain | Delmon',
    description: 'Explore deformed steel bars, welded wire mesh, timber, lumber, plywood and MDF from Delmon in Bahrain. View product specifications and request a quotation.',
    heading: 'Building Material Products',
    type: 'CollectionPage',
  },
  {
    path: '/services',
    title: 'Building Material Supply Services in Bahrain | Delmon',
    description: 'Delmon supports construction projects in Bahrain with material supply, international sourcing, warehousing and delivery coordination tailored to project needs.',
    heading: 'Material Supply Services',
    type: 'CollectionPage',
  },
  {
    path: '/contact',
    title: 'Contact Delmon Building Materials | Bahrain Quotations',
    description: 'Contact Delmon Building Materials in Manama, Bahrain for product availability, specifications and quotations on steel, wire mesh, timber, plywood and MDF.',
    heading: 'Contact Delmon',
    type: 'ContactPage',
  },
] as const;

export type PageSeo = (typeof seoPages)[number];

export function getPageSeo(pathname: string): PageSeo {
  const path = pathname.replace(/\/+$/, '') || '/';
  return seoPages.find(page => page.path === path) ?? seoPages[0];
}

export function getSeoTags(page: PageSeo) {
  return [
    { attribute: 'name', key: 'description', content: page.description },
    { attribute: 'name', key: 'robots', content: 'index, follow, max-image-preview:large' },
    { attribute: 'property', key: 'og:site_name', content: 'Delmon Building Materials' },
    { attribute: 'property', key: 'og:title', content: page.title },
    { attribute: 'property', key: 'og:description', content: page.description },
    { attribute: 'property', key: 'og:url', content: `${siteOrigin}${page.path}` },
    { attribute: 'property', key: 'og:type', content: 'website' },
    { attribute: 'property', key: 'og:locale', content: 'en_BH' },
    { attribute: 'property', key: 'og:image', content: socialImage },
    { attribute: 'property', key: 'og:image:secure_url', content: socialImage },
    { attribute: 'property', key: 'og:image:type', content: 'image/jpeg' },
    { attribute: 'property', key: 'og:image:width', content: '1200' },
    { attribute: 'property', key: 'og:image:height', content: '630' },
    { attribute: 'property', key: 'og:image:alt', content: socialImageAlt },
    { attribute: 'name', key: 'twitter:card', content: 'summary_large_image' },
    { attribute: 'name', key: 'twitter:title', content: page.title },
    { attribute: 'name', key: 'twitter:description', content: page.description },
    { attribute: 'name', key: 'twitter:image', content: socialImage },
    { attribute: 'name', key: 'twitter:image:alt', content: socialImageAlt },
  ];
}

export function getStructuredData(page: PageSeo) {
  const businessId = `${siteOrigin}/#business`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: 'Delmon Building Materials',
        url: `${siteOrigin}/`,
        description: seoPages[0].description,
        logo: `${siteOrigin}/delmon-logo.png`,
        image: socialImage,
        foundingDate: '1974',
        telephone: '+97317400508',
        email: 'delmon@jalal.com',
        address: {
          '@type': 'PostalAddress',
          postOfficeBoxNumber: '20069',
          addressLocality: 'Manama',
          addressCountry: 'BH',
        },
        parentOrganization: { '@type': 'Organization', name: 'Mohamed Jalal & Sons' },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        name: 'Delmon Building Materials',
        url: `${siteOrigin}/`,
        inLanguage: 'en',
        publisher: { '@id': businessId },
      },
      {
        '@type': page.type,
        '@id': `${siteOrigin}${page.path}#webpage`,
        url: `${siteOrigin}${page.path}`,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${siteOrigin}/#website` },
        about: { '@id': businessId },
      },
      ...(page.path === '/' ? [] : [{
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
          { '@type': 'ListItem', position: 2, name: page.heading, item: `${siteOrigin}${page.path}` },
        ],
      }]),
    ],
  };
}
