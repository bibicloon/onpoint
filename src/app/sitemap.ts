import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://onpointkoerier.nl';

  // Vaste hoofdpagina's
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/diensten', priority: 0.9 },
    { url: '/tarieven', priority: 0.9 },
    { url: '/zakelijk', priority: 0.9 },
    { url: '/over-ons', priority: 0.9 },
    { url: '/contact', priority: 0.9 },
    { url: '/spoedtransport', priority: 0.9 }
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.priority,
  }));

  // Dynamische werkgebieden uitlezen
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const werkgebiedDir = path.join(process.cwd(), 'src', 'app', 'werkgebied');
    const entries = await fs.promises.readdir(werkgebiedDir, { withFileTypes: true });
    
    dynamicRoutes = entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith('['))
      .map((dir) => ({
        url: `${baseUrl}/werkgebied/${dir.name}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
  } catch (error) {
    console.error('Kon werkgebied map niet uitlezen voor sitemap:', error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
