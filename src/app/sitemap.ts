import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

async function getFileMtime(filePath: string): Promise<Date> {
  try {
    const stat = await fs.promises.stat(filePath);
    return stat.mtime;
  } catch {
    return new Date('2026-11-12T18:00:00Z');
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://onpointkoeriers.nl';
  const appDir = path.join(process.cwd(), 'src', 'app');

  // Vaste hoofdpagina's
  const staticPages = [
    { url: '', file: 'page.tsx', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/spoedtransport', file: 'spoedtransport/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten', file: 'diensten/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten/medisch-spoedtransport', file: 'diensten/medisch-spoedtransport/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten/juridisch-documenten-koerier', file: 'diensten/juridisch-documenten-koerier/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten/automotive-onderdelen', file: 'diensten/automotive-onderdelen/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten/luchtvracht-aog-koerier', file: 'diensten/luchtvracht-aog-koerier/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/diensten/machinebouw-industrie-koerier', file: 'diensten/machinebouw-industrie-koerier/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/tarieven', file: 'tarieven/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/zakelijk', file: 'zakelijk/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/over-ons', file: 'over-ons/page.tsx', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', file: 'contact/page.tsx', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/kennisbank', file: 'kennisbank/page.tsx', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/faq', file: 'faq/page.tsx', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/algemene-voorwaarden', file: 'algemene-voorwaarden/page.tsx', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/privacybeleid', file: 'privacybeleid/page.tsx', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = await Promise.all(
    staticPages.map(async (page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: await getFileMtime(path.join(appDir, page.file)),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  // Dynamische werkgebieden uitlezen
  let werkgebiedRoutes: MetadataRoute.Sitemap = [];
  try {
    const werkgebiedDir = path.join(appDir, 'werkgebied');
    const entries = await fs.promises.readdir(werkgebiedDir, { withFileTypes: true });
    const dirs = entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith('['));

    werkgebiedRoutes = await Promise.all(
      dirs.map(async (dir) => ({
        url: `${baseUrl}/werkgebied/${dir.name}`,
        lastModified: await getFileMtime(path.join(werkgebiedDir, dir.name, 'page.tsx')),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    );
  } catch (error) {
    console.error('Kon werkgebied map niet uitlezen voor sitemap:', error);
  }

  // Dynamische kennisbank artikelen uitlezen
  let kennisbankRoutes: MetadataRoute.Sitemap = [];
  try {
    const kennisbankDir = path.join(appDir, 'kennisbank');
    const entries = await fs.promises.readdir(kennisbankDir, { withFileTypes: true });
    const dirs = entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith('['));

    kennisbankRoutes = await Promise.all(
      dirs.map(async (dir) => ({
        url: `${baseUrl}/kennisbank/${dir.name}`,
        lastModified: await getFileMtime(path.join(kennisbankDir, dir.name, 'page.tsx')),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    );
  } catch (error) {
    console.error('Kon kennisbank map niet uitlezen voor sitemap:', error);
  }

  return [...staticRoutes, ...werkgebiedRoutes, ...kennisbankRoutes];
}
