import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://askworx.vercel.app';
  
  const routes = [
    '',
    '/products',
    '/services',
    '/industries',
    '/iiot-platform',
    '/case-studies',
    '/about',
    '/technology',
    '/blog',
    '/contact',
    '/services/industrial-automation',
    '/services/cloud-iiot',
    '/industries/automotive',
    '/industries/pharma'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
