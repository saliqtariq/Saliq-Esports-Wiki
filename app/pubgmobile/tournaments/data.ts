export type OrganizationTournament = {
  name: string;
  status: string;
  format: string;
  prizePool: string;
  startDate: string;
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
    slug: '7sins',
    name: 'IHS Gaming',
    logo: '/IHS-logo.png',
    shortInfo: 'IHS Clash Season 1, IHS Elite Battle,IHS Daily Battle.',
    region: 'Pakistan',
    founded: '2022',
    ongoingTournaments: [
      {
        name: 'PMNC Pakistan 2026 Open Qualifiers',
        status: 'Registered',
        format: 'Squad BO6',
        prizePool: 'TBD',
        startDate: 'May 12, 2026',
      },
      {
        name: 'Karachi Rivals Invitational',
        status: 'Group Stage',
        format: 'Squad BO8',
        prizePool: 'PKR 300,000',
        startDate: 'May 5, 2026',
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
    name: 'Destroyer Esports',
    logo: '/Des-Logo.jpg',
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
];

export const organizationsBySlug = organizations.reduce<Record<string, Organization>>((acc, org) => {
  acc[org.slug] = org;
  return acc;
}, {});
