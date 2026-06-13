import { players as localPlayers } from './data';
import PlayersClient from './PlayersClient';
import { client } from '../../../sanity/client';
import { getAllPlayersQuery } from '../../../sanity/queries';
import { urlForImage } from '../../../sanity/image';

// Revalidate every 60 seconds, or you can use webhooks for on-demand revalidation
export const revalidate = 60;

export default async function PlayersPage() {
  // 1. Fetch live players from Sanity
  const sanityPlayers = await client.fetch(getAllPlayersQuery);

  // 2. Safely parse Sanity images
  const formattedSanityPlayers = sanityPlayers.map((sp: any) => ({
    ...sp,
    image: sp.image ? urlForImage(sp.image).url() : undefined,
    teamLogo: sp.teamLogo ? urlForImage(sp.teamLogo).url() : undefined,
    isFromSanity: true,
  }));

  // 3. Combine them. We will use the 'slug' to deduplicate.
  // If a slug exists in Sanity, it overwrites the local one.
  const combinedMap = new Map();

  // Add local players first
  localPlayers.forEach((lp) => {
    combinedMap.set(lp.slug, lp);
  });

  // Overwrite/Add Sanity players
  formattedSanityPlayers.forEach((sp: any) => {
    combinedMap.set(sp.slug, {
      ...combinedMap.get(sp.slug), // Keep local fallbacks if Sanity is missing fields
      ...sp,
    });
  });

  // Convert map back to array
  const finalPlayers = Array.from(combinedMap.values());

  return <PlayersClient players={finalPlayers} />;
}
