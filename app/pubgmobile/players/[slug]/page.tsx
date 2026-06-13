import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PlayerProfileClient from './PlayerProfileClient';
import { getAbsoluteUrl, getPlayer, getPlayerDescription, getPlayerSeoTitle, players } from '../data';
import { client } from '../../../../sanity/client';
import { getPlayerBySlugQuery } from '../../../../sanity/queries';
import { urlForImage } from '../../../../sanity/image';

type PlayerPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = true;

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const localPlayer = getPlayer(slug);
  const sanityPlayer = await client.fetch(getPlayerBySlugQuery, { slug });

  if (!localPlayer && !sanityPlayer) {
    return {
      title: 'Player Not Found | Saliq Esports',
      robots: { index: false, follow: false },
    };
  }

  const path = `/pubgmobile/players/${slug}`;
  const url = getAbsoluteUrl(path);
  const imageUrl = sanityPlayer?.image ? urlForImage(sanityPlayer.image).url() : getAbsoluteUrl(localPlayer?.image || '');
  const description = sanityPlayer?.bio || (localPlayer ? getPlayerDescription(localPlayer) : '');
  const nick = sanityPlayer?.nick || localPlayer?.nick || '';
  const title = sanityPlayer?.nick ? `${sanityPlayer.nick.toUpperCase()} - PUBG Mobile Player Profile` : (localPlayer ? getPlayerSeoTitle(localPlayer) : '');
  const name = sanityPlayer?.name || localPlayer?.name || '';
  const teamName = sanityPlayer?.teamName || localPlayer?.teamName || '';
  const seoAliases = localPlayer?.seoAliases ?? [];

  return {
    title: `${title} | Saliq Esports`,
    description,
    keywords: [
      nick,
      `${nick} PUBG`,
      `${nick} PUBG Mobile`,
      `${nick} PUBGM`,
      name,
      teamName,
      'Pakistan PUBG Mobile player',
      'Saliq Esports',
      ...seoAliases,
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
          alt: `${nick} PUBG Mobile player profile`,
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
  
  // 1. Fetch from local hardcoded data
  const localPlayer = getPlayer(slug);
  
  // 2. Fetch from Sanity
  const sanityPlayer = await client.fetch(getPlayerBySlugQuery, { slug });

  // 3. If neither exists, 404
  if (!localPlayer && !sanityPlayer) {
    notFound();
  }

  // 4. Determine final player data to pass to SEO/JsonLd
  const finalName = sanityPlayer?.name || localPlayer?.name || '';
  const finalNick = sanityPlayer?.nick || localPlayer?.nick || '';
  const finalTeamName = sanityPlayer?.teamName || localPlayer?.teamName || '';
  const finalNationality = sanityPlayer?.nationality || localPlayer?.nationality || '';
  const finalImage = sanityPlayer?.image ? urlForImage(sanityPlayer.image).url() : getAbsoluteUrl(localPlayer?.image || '');
  const finalDescription = sanityPlayer?.bio || (localPlayer ? getPlayerDescription(localPlayer) : '');
  const finalInstagram = sanityPlayer?.instagram || localPlayer?.instagram;

  const url = getAbsoluteUrl(`/pubgmobile/players/${slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: finalName,
    alternateName: [finalNick, ...(localPlayer?.seoAliases ?? [])],
    nationality: finalNationality,
    image: finalImage,
    url,
    description: finalDescription,
    sameAs: finalInstagram ? [finalInstagram] : undefined,
    memberOf: {
      '@type': 'SportsTeam',
      name: finalTeamName,
      sport: 'PUBG Mobile Esports',
    },
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': url,
      name: `${finalNick.toUpperCase()} - PUBG Mobile Player Profile`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <PlayerProfileClient slug={slug} sanityData={sanityPlayer} />
    </>
  );
}
