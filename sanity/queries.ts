import { groq } from 'next-sanity'

export const getAllPlayersQuery = groq`
  *[_type == "player"] {
    "slug": slug.current,
    "nick": ign,
    "name": name,
    "teamName": team,
    "nationality": country,
    "image": image,
    "role": role,
    "bio": bio,
    born,
    status,
    teamLogo,
    instagram
  }
`

export const getPlayerBySlugQuery = groq`
  *[_type == "player" && slug.current == $slug][0] {
    "slug": slug.current,
    "nick": ign,
    "name": name,
    "teamName": team,
    "nationality": country,
    "image": image,
    "role": role,
    "bio": bio,
    born,
    status,
    teamLogo,
    instagram,
    achievements,
    history,
    staffHistory
  }
`
