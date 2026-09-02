import { MetadataRoute } from 'next';
import { services, solutions, industries, posts } from '@/lib/site';

const baseUrl = 'https://askworx.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/solutions', priority: 0.9 },
    { path: '/industries', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/blog', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ];

  const dynamicRoutes = [
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.8 })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.7 })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
