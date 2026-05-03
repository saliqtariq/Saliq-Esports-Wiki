export type OrganizationTournament = {
  name: string;
  status: string;
  format: string;
  prizePool: string;
  startDate: string;
  logo?: string;
  round?: string;
};

export type Organization = {
  slug: string;
  name: string;
  logo: string;
  shortInfo: string;
  region: string;
  founded: string;
  ongoingTournaments: OrganizationTournament[];
};

export const organizations: Organization[] = [
  {
    slug: 'maxebels',
    name: 'Maxebels',
    logo: '/Maxbels logo.jpeg',
    shortInfo: 'Active tournament organizer with regular custom-room events.',
    region: 'Pakistan',
    founded: '2024',
    ongoingTournaments: [
      {
        name: 'Maxebels Invitational Season 4',
        status: 'Invitational',
        format: 'Invitational',
        prizePool: '1000$',
        startDate: '25 April 2026',
        round: 'Play Offs',
        logo: '/MaxInvS4.jpeg',
      },
    ],
  },
  {
    slug: '7sins',
    name: 'IHS Scrims',
    logo: '/IHS-logo.png',
    shortInfo: 'IHS Clash Season 1, IHS Elite Battle,IHS Daily Battle.',
    region: 'Pakistan',
    founded: '2022',
    ongoingTournaments: [
      {
        name: 'IHS CLASH S1',
        status: 'Register Now',
        format: 'Entry Fee: Free',
        prizePool: 'PKR 60,000',
        startDate: 'April 27, 2026',
        logo: '/Ihs clash s1.jpeg',
      },
      {
        name: 'IHS CLASH S2',
        status: 'Register Now',
        format: 'Entry Fee: Free',
        prizePool: 'PKR 80,000',
        startDate: 'May 3, 2026',
        logo: '/IHS Clash S2 fixed.jpeg',
      },
      {
        name: 'IHS Daily Battle',
        status: 'Register Now',
        format: 'Entry Fee: PKR 300',
        prizePool: 'PKR 5,000',
        startDate: '8:10 PM / 10:30 PM',
        logo: '/IHS Daily Battle.jpeg',
      },
      {
        name: 'IHS Daily Battle S2',
        status: 'Register Now',
        format: 'Entry Fee: PKR 500',
        prizePool: 'PKR 8,500',
        startDate: '8:10 PM / 10:30 PM',
        logo: '/IHS Daily Battle.jpeg',
      },
    ],
  },
  {
    slug: 'galacticous',
    name: 'esport141official',
    logo: '/141-logo.jpg',
    shortInfo: 'Consistent macro-focused roster with regular finals appearances.',
    region: 'Pakistan',
    founded: '2021',
    ongoingTournaments: [
      {
        name: 'Punjab Championship Circuit',
        status: 'Semi Finals',
        format: 'Squad BO10',
        prizePool: 'PKR 500,000',
        startDate: 'May 2, 2026',
      },
      {
        name: 'Community Clash Cup S2',
        status: 'Scrim Week',
        format: 'Squad BO4',
        prizePool: 'PKR 120,000',
        startDate: 'May 9, 2026',
      },
    ],
  },
  {
    slug: 'destroyer-esports',
    name: 'Radical Death',
    logo: '/RadicalDeath-Logo.jpeg',
    shortInfo: 'Well-known grassroots organization developing emerging talent.',
    region: 'Pakistan',
    founded: '2020',
    ongoingTournaments: [
      {
        name: 'National Rising Stars League',
        status: 'Upper Bracket',
        format: 'Squad BO6',
        prizePool: 'PKR 200,000',
        startDate: 'May 6, 2026',
      },
      {
        name: 'Pakistan Weekend Masters',
        status: 'Check-in Open',
        format: 'Squad BO5',
        prizePool: 'PKR 90,000',
        startDate: 'May 10, 2026',
      },
    ],
  },
  {
    slug: 'star-rising-esports',
    name: 'Star Rising Esports',
    logo: '/StarRising-Esp.jpeg',
    shortInfo: 'Emerging roster with strong performances in open lobby events.',
    region: 'Pakistan',
    founded: '2023',
    ongoingTournaments: [
      {
        name: 'Open May Championship',
        status: 'Registered',
        format: 'Squad BO6',
        prizePool: 'PKR 150,000',
        startDate: 'May 14, 2026',
      },
      {
        name: 'Weekend Thunder Cup',
        status: 'Qualifier Stage',
        format: 'Squad BO5',
        prizePool: 'PKR 80,000',
        startDate: 'May 11, 2026',
      },
    ],
  },
  {
    slug: '4sight-esports',
    name: '4Sight Esports',
    logo: '/4Sight-Esportslogo.jpeg',
    shortInfo: 'Competitive squad focused on qualifier consistency and late-game control.',
    region: 'Pakistan',
    founded: '2023',
    ongoingTournaments: [
      {
        name: 'Metro May Showdown',
        status: 'Registered',
        format: 'Squad BO6',
        prizePool: 'PKR 130,000',
        startDate: 'May 16, 2026',
      },
      {
        name: 'Elite Weekend Series',
        status: 'Group Stage',
        format: 'Squad BO5',
        prizePool: 'PKR 95,000',
        startDate: 'May 13, 2026',
      },
    ],
  },
  {
    slug: 'ssp-esports',
    name: 'SSP Esports',
    logo: '/SSP Esports.jpeg',
    shortInfo: 'Emerging competitive roster with steady scrim and qualifier activity.',
    region: 'Pakistan',
    founded: '2024',
    ongoingTournaments: [
      {
        name: 'City Rivals League',
        status: 'Registered',
        format: 'Squad BO5',
        prizePool: 'PKR 85,000',
        startDate: 'May 18, 2026',
      },
      {
        name: 'Proving Grounds Cup',
        status: 'Qualifier Stage',
        format: 'Squad BO6',
        prizePool: 'PKR 110,000',
        startDate: 'May 15, 2026',
      },
    ],
  },
  {
    slug: 'zenith-esport-scrims',
    name: 'Zenith Esport Scrims',
    logo: '/Zenith-logo.jpeg',
    shortInfo: 'Scrim-focused organization running consistent competitive lobbies.',
    region: 'Pakistan',
    founded: '2024',
    ongoingTournaments: [
      {
        name: 'Zenith Prime Scrims',
        status: 'Ongoing',
        format: 'Squad BO6',
        prizePool: 'PKR 75,000',
        startDate: 'May 19, 2026',
      },
      {
        name: 'Zenith Night Clash',
        status: 'Registration Open',
        format: 'Squad BO4',
        prizePool: 'PKR 50,000',
        startDate: 'May 21, 2026',
      },
    ],
  },
  {
    slug: 'gravity-esports',
    name: 'Gravity Esports',
    logo: '/Gravityesp-logo.jpeg',
    shortInfo: 'Competitive team active in regional scrims and open tournaments.',
    region: 'Pakistan',
    founded: '2024',
    ongoingTournaments: [
      {
        name: 'Gravity Championship Series',
        status: 'Registration Open',
        format: 'Squad BO6',
        prizePool: 'PKR 120,000',
        startDate: 'May 22, 2026',
      },
      {
        name: 'Late Night Pro Rooms',
        status: 'Ongoing',
        format: 'Squad BO4',
        prizePool: 'PKR 60,000',
        startDate: 'May 12, 2026',
      },
    ],
  },
  {
    slug: 'pakistan-esport-federation',
    name: 'Pakistan Esport Federation',
    logo: '/pesf-logo.jpg',
    shortInfo: 'National body supporting esports events and competitive development.',
    region: 'Pakistan',
    founded: '2020',
    ongoingTournaments: [
      {
        name: 'PESF National Scrim Circuit',
        status: 'Registration Open',
        format: 'Squad BO6',
        prizePool: 'PKR 200,000',
        startDate: 'May 24, 2026',
      },
      {
        name: 'PESF Challenger Cup',
        status: 'Qualifier Stage',
        format: 'Squad BO5',
        prizePool: 'PKR 140,000',
        startDate: 'May 19, 2026',
      },
    ],
  },
];

export const organizationsBySlug = organizations.reduce<Record<string, Organization>>((acc, org) => {
  acc[org.slug] = org;
  return acc;
}, {});

export function toTournamentSlug(tournamentName: string): string {
  return tournamentName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
