import type { MetadataRoute } from 'next';
import { getAbsoluteUrl, players } from './pubgmobile/players/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/pubgmobile',
    '/pubgmobile/players',
    '/pubgmobile/tournaments',
    '/pubgmobile/maps',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: getAbsoluteUrl(route || '/'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...players.map((player) => ({
      url: getAbsoluteUrl(`/pubgmobile/players/${player.slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: player.slug === 'falcon' ? 0.9 : 0.7,
    })),
  ];
}
