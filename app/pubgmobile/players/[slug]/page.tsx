import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PlayerProfileClient from './PlayerProfileClient';
import { getAbsoluteUrl, getPlayer, getPlayerDescription, getPlayerSeoTitle, players } from '../data';

type PlayerPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayer(slug);

  if (!player) {
    return {
      title: 'Player Not Found | Saliq Esports',
      robots: { index: false, follow: false },
    };
  }

  const path = `/pubgmobile/players/${player.slug}`;
  const url = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl(player.image);
  const description = getPlayerDescription(player);
  const title = getPlayerSeoTitle(player);

  return {
    title: `${title} | Saliq Esports`,
    description,
    keywords: [
      player.nick,
      `${player.nick} PUBG`,
      `${player.nick} PUBG Mobile`,
      `${player.nick} PUBGM`,
      player.name,
      player.teamName,
      'Pakistan PUBG Mobile player',
      'Saliq Esports',
      ...(player.seoAliases ?? []),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Saliq Esports',
      type: 'profile',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1000,
          alt: `${player.nick} PUBG Mobile player profile`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PlayerProfilePage({ params }: PlayerPageProps) {
  const { slug } = await params;
  const player = getPlayer(slug);

  if (!player) {
    notFound();
  }

  const url = getAbsoluteUrl(`/pubgmobile/players/${player.slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: player.name,
    alternateName: [player.nick, ...(player.seoAliases ?? [])],
    nationality: player.nationality,
    image: getAbsoluteUrl(player.image),
    url,
    description: getPlayerDescription(player),
    sameAs: player.instagram ? [player.instagram] : undefined,
    memberOf: {
      '@type': 'SportsTeam',
      name: player.teamName,
      sport: 'PUBG Mobile Esports',
    },
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': url,
      name: getPlayerSeoTitle(player),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <PlayerProfileClient slug={player.slug} />
    </>
  );
}
