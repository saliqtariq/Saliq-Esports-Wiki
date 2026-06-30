/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import Footer from '@/app/components/Footer';
import BackButton from '@/app/components/BackButton';

type Achievement = {
  date: string;
  place: string;
  tier: string;
  tourney: string;
  team: string;
};

const TIER_PRIORITY: Record<string, number> = {
  'S-Tier': 0,
  'A-Tier': 1,
  'B-Tier': 2,
  'C-Tier': 3,
  'D-Tier': 4,
};

type HistoryEntry = {
  join: string;
  leave: string;
  team: string;
};

type StaffHistoryEntry = {
  join: string;
  leave: string;
  team: string;
  role: string;
};

type PlayerData = {
  name: string;
  nick: string;
  image: string;
  teamLogo: string;
  teamName: string;
  nationality: string;
  born: string;
  status: string;
  statusColor?: string;
  bio: React.ReactNode;
  achievements: Achievement[];
  history: HistoryEntry[];
  staffHistory?: StaffHistoryEntry[];
  instagram?: string;
};

const PLAYERS_DATA: Record<string, PlayerData> = {
  'alphaboy': {
    name: 'Muhammad Huzaifa Ali',
    nick: 'AlphaBoy',
    image: '/Alphaboy-EsportPic.jpg',
    teamLogo: '/SeventhElement-Logo.png',
    teamName: 'Seventh Element',
    nationality: 'Pakistan',
    born: 'January 1, 2006 (age 20)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad <strong style={{ color: '#fff' }}>"AlphaBoy"</strong> Ali (born January 1, 2006) is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#3498db', fontWeight: 600 }}>Seventh Element</span>.
      </p>
    ),
    achievements: [
      { date: '2026-04-19', place: '6th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: 'Seventh Element' },
      { date: '2025-08-14', place: '1st', tier: 'C-Tier', tourney: 'PUBG Mobile Titans\' Clash 2025', team: 'Koxav Esports' },
      { date: '2025-08-06', place: '1st', tier: 'C-Tier', tourney: 'PUBG Mobile realme NUMBER 14', team: 'Koxav Esports' },
      { date: '2025-06-22', place: '9th', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - C&S Asia Spring 2025', team: 'Koxav Esports' },
      { date: '2025-04-27', place: '3rd', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'Koxav Esports' },
      { date: '2024-07-27', place: '1st', tier: 'C-Tier', tourney: 'PUBG Mobile Jazba Series 2024', team: 'XGeneration' },
      { date: '2023-08-20', place: '12th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2023', team: 'XGeneration' },
      { date: '2023-04-09', place: '11th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'XGeneration' },
      { date: '2022-12-25', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2022', team: 'XGeneration' },
      { date: '2022-06-11', place: '8th', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Asia Spring 2022', team: 'Flames 1' },
    ],
    history: [
      { join: '2021-02-10', leave: '2022-07-13', team: 'Flames 1' },
      { join: '2022-12-01', leave: '2024-03-27', team: 'XGeneration' },
      { join: '2024-09-07', leave: '2025-11-14', team: 'Knockout Esports' },
      { join: '2026-01-10', leave: '2026-03-01', team: 'Koxav Esports' },
      { join: '2026-03-01', leave: 'Present', team: 'Seventh Element' },
    ]
  },
  'shurta': {
    name: 'Saliq Tariq',
    nick: 'Shurta',
    image: '/ShurtaG-Esport Pic.jpg',
    teamLogo: '/Des-Logo.jpg',
    teamName: 'Destroyer Esports',
    nationality: 'Pakistan',
    born: 'August 17, 2005 (age 20)',
    status: 'Not-Active',
    statusColor: '#e74c3c',
    bio: (
      <p style={{ margin: 0 }}>
        Saliq Tariq <strong style={{ color: '#fff' }}>"Shurta"</strong>  is a <span style={{ color: '#e74c3c', fontWeight: 600 }}>Not-Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who last played for <span style={{ color: '#e74c3c', fontWeight: 600 }}>Destroyer Esports</span>.
      </p>
    ),
    achievements: [
      { date: '2024-03-18', place: '3rd', tier: 'C-Tier', tourney: 'NIL League S14', team: 'FMA Esports' },
      { date: '2024-06-15', place: '1st', tier: 'D-Tier', tourney: 'The Clash Last Circle', team: 'FMA Esports' },
      { date: '2024-08-26', place: '3rd', tier: 'D-Tier', tourney: 'IHS League S11', team: 'FMA Esports' },
      { date: '2024-10-27', place: '3rd', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown', team: '52 Esports' },
      { date: '2021-09-30', place: '1st', tier: 'B-Tier', tourney: 'Codashop Global Series Pakistan 2021', team: '247Esports' },
      { date: '2024-04-21', place: '5th', tier: 'B-Tier', tourney: 'Gamers Galaxy Pakistan 2024', team: 'FMA Esports' },
      { date: '2024-03-08', place: '12th', tier: 'C-Tier', tourney: 'K2 Gamer Pakistan Universities Showdown 2023-24', team: 'F2D Esports' },
      { date: '2023-02-11', place: '10th', tier: 'C-Tier', tourney: 'PUBG Mobile Underdog Clash Season 1', team: 'MSxDTD' },
      { date: '2026-01-04', place: '13th', tier: 'C-Tier', tourney: 'PUBG Mobile Winter Rumble 2025', team: 'Destroyer Esports' },
      { date: '2025-11-10', place: 'Finals', tier: 'C-Tier', tourney: 'PUBG Mobile Manhunt Series - Season 2', team: 'Destroyer Esports' },
      { date: '2025-07-20', place: '11th', tier: 'C-Tier', tourney: 'PUBG Mobile Summer Clash 2025', team: 'Destroyer Esports' },
    ],
    history: [
      { join: '2020', leave: '2021', team: '247 Esports' },
      { join: '2021', leave: '2022', team: 'MSxDTD' },
      { join: '2022', leave: '2023', team: 'F2D Esports' },
      { join: '2023-02-21', leave: '2024', team: 'Destroyer Esports' },
      { join: '2024', leave: '2025', team: 'FMA Esports' },
      { join: '2025', leave: '2026', team: 'Destroyer Esports' },
    ]
  },
  'chief-og': {
    name: 'Muhammad Izhar',
    nick: 'Chief OG',
    image: '/Chief-Esport Pic.jpg',
    teamLogo: '/Galacticous-logo.jpeg',
    teamName: 'Galacticous',
    nationality: 'Pakistan',
    born: 'June 4, 2005 (age 20)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad Izhar <strong style={{ color: '#fff' }}>"Chief OG"</strong> (born June 4, 2005) is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ background: 'linear-gradient(to right, #ff4d4d, #f1c40f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>Galacticous</span>.
      </p>
    ),
    achievements: [
      { date: '2024-03-03', place: '27th', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central and South Asia 2024: Pakistan Qualifier', team: 'Hashtag Esports' },
      { date: '2023-04-09', place: '12th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'Team QWERTY' },
      { date: '2022-11-22', place: '16th', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Asia Fall 2022', team: '7Sins' },
      { date: '2022-07-31', place: '14th', tier: 'B-Tier', tourney: 'Gamenow Summer Clash', team: 'DTDxEsports' },
       { date: '2023-03-20', place: '1st', tier: 'D-Tier', tourney: 'PUBG Mobile The Survival', team: 'Team QWERTY' },
      { date: '2026-03-9', place: '1st', tier: 'D-Tier', tourney: '4Sight Ramadan Grind S2', team: 'Galacticous' },
      { date: '2026-02-12', place: '2nd', tier: 'D-Tier', tourney: '7Shore Stranger Things S1', team: 'Galacticous' },
    ],
    history: [
      { join: '-', leave: '-', team: 'RPG' },
      { join: '-', leave: '2022-07-31', team: 'DTD' },
      { join: '2022-11-21', leave: '-', team: '7Sins' },
      { join: '2023-03-21', leave: '2023-04-09', team: 'QWERTY' },
      { join: '2024-02-21', leave: '2024-03-03', team: 'HASHTAG' },
      { join: '-', leave: 'Present', team: 'Galacticous' },
    ]
  },
  'eminent': {
    name: 'Khuzaima',
    nick: 'Eminent',
    image: '/FmaxEminent-Pic.png',
    teamLogo: '/fma-esports-logo.jpg',
    teamName: 'FMA Esports',
    nationality: 'Pakistan',
    born: 'TBD',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Khuzaima <strong style={{ color: '#fff' }}>"Eminent"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ background: 'linear-gradient(to right, #ff0000, #000000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>FMA Esports</span>.
      </p>
    ),
    achievements: [
      { date: '2024-03-18', place: '3rd', tier: 'C-Tier', tourney: 'NIL League S14', team: 'FMA Esports' },
      { date: '2026-05-17', place: '16th', tier: 'A-Tier', tourney: 'PUBG Mobile Global Open 2026 Season 1 - South Asia Finals', team: 'Red Saints' },
      { date: '2024-06-15', place: '1st', tier: 'D-Tier', tourney: 'The Clash Last Circle', team: 'FMA Esports' },
      { date: '2024-08-26', place: '3rd', tier: 'D-Tier', tourney: 'IHS League S11', team: 'FMA Esports' },
      { date: '2025-08-31', place: '9th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Fall 2025', team: 'FMA Esports' },
      { date: '2025-04-27', place: '8th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'FMA Esports' },
      { date: '2024-04-21', place: '5th', tier: 'B-Tier', tourney: 'Gamers Galaxy Pakistan 2024', team: 'FMA Esports' },
      { date: '2025-11-10', place: 'Finals', tier: 'C-Tier', tourney: 'PUBG Mobile Manhunt Series - Season 2', team: 'Destroyer Esports' },
    ],
    history: [
      { join: '-', leave: 'Present', team: 'FMA Esports' },
    ]
  },
   'maade': {
    name: 'Muhammad Maadekarab',
    nick: 'Maade',
    image: '/Maadepicfixed.png',
    teamLogo: '/rpglogo.jpg',
    teamName: 'Rising Phantom Gunners',
    nationality: 'Pakistan',
    born: 'Nov 4, 2008 (age 17)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad MaadeKarab <strong style={{ color: '#fff' }}>"Maade"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ background: 'linear-gradient(to right, #FFFFFF, #B8B8B8, #787878)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', fontWeight: 700, display: 'inline-block' }}>RPG Esports</span>.
      </p>
    ),
    achievements: [
      { date: '2026-02-16', place: '1st', tier: 'C-Tier', tourney: 'SMEC 2026 x Kovax Tribe', team: 'Team RPG' },
      { date: '2025-09-12', place: '1st', tier: 'D-Tier', tourney: 'PUBG Mobile Youngster Battle Season 2', team: 'Team Star' },
      { date: '2025-10-24', place: '1st', tier: 'D-Tier', tourney: 'Pubg Mobile Executioners Cup Season 2', team: 'Team Star' },
      { date: '2026-04-19', place: '16th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: 'Team RPG' },
      { date: '2026-02-22', place: '5th', tier: 'C-Tier', tourney: 'Zong Engage Pubg Mobile University Showdown', team: 'NED 99' },
      { date: '2026-05-03', place: '1st', tier: 'C-Tier', tourney: 'NED EVOLVE 2026', team: 'Team RPG' },
    ],
    history: [
      { join: '-', leave: '-', team: 'T-REX ESPORTS' },
      { join: '-', leave: '-', team: 'AJ ESPORTS' },
      { join: '-', leave: '-', team: 'STAR OFFICIAL' },
      { join: '-', leave: '-', team: '4RM ESPORTS' },
      { join: '-', leave: '-', team: 'RPG ESPORTS' },
      { join: '-', leave: 'Present', team: 'FREE AGENT' },
    ]
  },
  'beastopie': {
    name: 'Muhammad Imad Habib',
    nick: 'Beastopie',
    image: '/Beast-EsportPic.jpeg',
    teamLogo: '/freestyle-logo.jpg',
    teamName: 'Freestyle',
    nationality: 'Pakistan',
    born: 'February 5, 2007 (age 19)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad Imad Habib <strong style={{ color: '#fff' }}>"Beastopie"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#FACC15', fontWeight: 700 }}>Freestyle</span>.
      </p>
    ),
    achievements: [
      { date: '2024-09-29', place: '12th', tier: 'D-Tier', tourney: 'Senior Championship Season 2', team: 'GPA' },
      { date: '2024-10-08', place: '15th', tier: 'D-Tier', tourney: 'Senior Chill Zone Season 1', team: 'ATX' },
      { date: '2020-09-09', place: '23rd', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Fall Split 2020: Pakistan', team: 'Ext' },
      { date: '2024-03-30', place: '12th', tier: 'B-Tier', tourney: 'IESF National Qualifiers - Pakistan 2024', team: 'H4K' },
      { date: '2026-11-19', place: '17th', tier: 'C-Tier', tourney: 'PUBG Mobile Stallions Series Qualifier Finals South Asia 2025', team: 'Unstoppable' },
      { date: '2026-02-06', place: '7th', tier: 'C-Tier', tourney: 'PUBG MOBILE UNIVERSITY SHOWDOWN', team: 'Freestyle' },
      { date: '2022-07-31', place: '16th', tier: 'C-Tier', tourney: 'PUBG MOBILE Gamenow Summer Clash', team: 'TOB' },
        { date: '2024-10-27', place: '6th', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown City Finals Lahore', team: 'ATX' },
    ],
    history: [
      { join: '2019', leave: '2021', team: 'EXTERMINATORS' },
      { join: '2021', leave: '2023', team: 'FIRE AND GLADIATORS' },
      { join: '2023', leave: '2023', team: 'EXTREME' },
      { join: '2023', leave: '2024', team: 'LQ5' },
      { join: '2024', leave: '2024', team: 'REVOLUTION' },
      { join: '2024', leave: '2024', team: 'GPA' },
      { join: '2024', leave: '2024', team: 'H4K' },
      { join: '2024', leave: '2025', team: 'ATX' },
      { join: '2025', leave: '2025', team: 'NEVERBACK' },
      { join: '2025 Nov', leave: 'Present', team: 'FREESTYLE' },
    ]
  },
   'aspekt': {
    name: 'Ahmed',
    nick: 'Aspekt',
    image: '/Aspekt-Esportpicreplace.jpg',
    teamLogo: '/F2D-EsportLogo.jpg',
    teamName: 'F2D Esports',
    nationality: 'Pakistan',
    born: 'May 24, 2004 (age 22)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Ahmed <strong style={{ color: '#fff' }}>"Aspekt"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#FACC15', fontWeight: 700 }}>F2D Esports</span>.
      </p>
    ),
    achievements: [
      { date: '2025-08-06', place: '9th', tier: 'C-Tier', tourney: 'PUBG Mobile realme NUMBER 14', team: 'F2D Esports' },
      { date: '2025-08-14', place: '9th', tier: 'C-Tier', tourney: 'PUBG Mobile Titans Clash 2025', team: 'F2D Esports' },
      { date: '2024-10-27', place: '4th', tier: 'B-Tier', tourney: 'Pubg Mobile Iron Showdown City Finals Pindi', team: 'Question 1' },
      { date: '2024-03-30', place: '6th', tier: 'B-Tier', tourney: 'IESF National Qualifiers Pakistan 2024', team: 'Hellraisers' },
      { date: '2025-04-27', place: '14th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'Red Death' },
      { date: '2025-08-31', place: '14th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Fall 2025', team: 'Unique Esports' },
      { date: '2025-07-20', place: '7th', tier: 'C-Tier', tourney: 'PUBG Mobile Summer Clash 2025', team: 'F2D Esports' },
    ],
    history: [
      { join: '', leave: 'Present', team: 'F2D Esports' },
    ]
  },
   'falak': {
    name: 'Falak Sher',
    nick: 'Falak',
    image: '/4tfalak-picfix.jpg',
    teamLogo: '/4thirveslogo.png',
    teamName: '4Thrives',
    nationality: 'Pakistan',
    born: 'April 25, 2007(age 19)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Falak Sher <strong style={{ color: '#fff' }}>"Falak"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ background: 'linear-gradient(to right, #f7e7a1, #e0b84f, #b8860b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', fontWeight: 700, display: 'inline-block' }}>4thrives Esports</span>.
      </p>
    ),
    achievements: [
      { date: '2026-05-17', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Global Open 2026 Season 1 - South Asia Finals', team: '4thrives' },
      { date: '2025-12-07', place: '19th', tier: 'S-Tier', tourney: 'PUBG Mobile Global Championship 2025', team: 'IC' },
      { date: '2025-08-03', place: '7th', tier: 'S-Tier', tourney: 'PUBG Mobile World Cup 2025', team: '4thrives' },
      { date: '2025-06-22', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central & South Asia Spring 2025	', team: '4thrives' },
      { date: '2023-09-03', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Fall 2023', team: 'Agonxi8 Esports' },
      { date: '2023-08-20', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2023', team: 'Agonxi8 Esports' },
      { date: '2023-07-13', place: '8th', tier: 'A-Tier', tourney: 'PUBG Mobile World Invitational 2023: Allstars Stage', team: 'Agonxi8 Esports' },
      { date: '2023-04-09', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'Agonxi8 Esports' },
      { date: '2023-02-12', place: '1st', tier: 'B-Tier', tourney: 'Gamekey Arena', team: 'Agonxi8 Esports' },
      { date: '2022-10-02', place: '2nd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2022', team: 'Team QWERTY' },
    ],
    history: [
      { join: '2022-01-22', leave: '2022-01-24', team: '4thieves' },
  { join: '2022-01-24', leave: '2022-10-20', team: 'TEAM QWERTY' },
  { join: '2022-10-20', leave: '2023-04-19', team: 'Agonxi8 Esports' },
  { join: '2024-12-01', leave: '2025-09-06', team: '4thrives Esports' },
  { join: '2025-09-06', leave: '2025-12-15', team: 'Inner Circle' },
  { join: '2025-12-15', leave: 'Present', team: '4thrives Esports' }
    ]
  },
  'smokie': {
    name: 'Muhammad Ali',
    nick: 'Smokie',
    image: '/SmokieupdatedPic.png',
    teamLogo: '/SonofAnarchylogo.jpeg',
    teamName: 'Son of Anarchy',
    nationality: 'Pakistan',
    born: '10 Nov 2008 (age 17)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad Ali <strong style={{ color: '#fff' }}>"Smokie"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ background: 'linear-gradient(to right, #f7e7a1, #e0b84f, #b8860b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', fontWeight: 700, display: 'inline-block' }}>Son of Anarchy</span>.
      </p>
    ),
    achievements: [
        { date: '2023-09-24', place: 'FINALS', tier: 'C-Tier', tourney: 'PUBG Mobile Jazba Series 2023', team: 'Cracked Mind' },
      { date: '2026-03-06', place: '7th', tier: 'D-Tier', tourney: 'PUBG Mobile Crescent Clash - Phase II', team: 'Son of Anarchy' },
      { date: '2025-08-03', place: '1st', tier: 'D-Tier', tourney: 'DHQ Grind Series', team: 'Son of Anarchy' }, 
       { date: '2024-10-27', place: '7th', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown City Finals Hyderabad', team: 'Stalkers' },
        { date: '2026-02-15', place: '5th', tier: 'C-Tier', tourney: 'PUBG Mobile Spring Cup 2026', team: 'Son of Anarchy' },
         { date: '2025-04-30', place: 'Finals', tier: 'B-Tier', tourney: 'IESF National Qualifiers - Pakistan 2025', team: 'ViperxS1' },
    ],
    history: [
      { join: '2023', leave: '2024', team: 'Cracked Minds' },
      { join: '2024', leave: '2025', team: 'Spetsnaz' },
      { join: '2025', leave: 'Present', team: 'Son of Anarchy' }
    ]
  },
  'chaos': {
    name: 'Muhammad Ali',
    nick: 'Chaos',
    image: '/chaospicturenew.jpg',
    teamLogo: '/h2elogo.png',
    teamName: 'H2E Esports',
    nationality: 'Pakistan',
    born: '24 March 2005 (age 20)',
    status: 'Free Agent',
    bio: (
       <p style={{ margin: 0 }}>
        Ali <strong style={{ color: '#fff' }}>"Chaos"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently a <span style={{ color: '#22C55E', fontWeight: 700 }}>Free Agent</span>.
      </p>
    ),
    achievements: [
        { date: '2024-10-27', place: '3rd', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown', team: '52 Esports' },
      { date: '2024-03-03', place: '27th', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central and South Asia 2024: Pakistan Qualifier', team: 'Hashtag Esports' },
      { date: '2025-04-27', place: '5th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'Spins Esport' }, 
    ],
    history: [
      { join: '-', leave: '-', team: 'F4' },
      { join: '-', leave: '-', team: '52 Esports' },
      { join: '-', leave: '-', team: 'Hashtag Esports' },
      { join: '-', leave: '-', team: 'Spins Esport' },
      { join: '-', leave: 'Present', team: 'H2E Esports' },
    ]
  },
   'falcon': {
    name: 'Fardeen Rogatia',
    nick: 'Falcon',
    image: '/FalconFixedEsppic.jpeg',
    teamLogo: '/Oxylogo.png',
    teamName: 'Oxy Esports',
    nationality: 'Pakistan',
    born: '19 Dec 2004 (age 21)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Fardeen Rogatia <strong style={{ color: '#fff' }}>"Falcon"</strong>  is an <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Oxy Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2025-07-20', place: '7th', tier: 'C-Tier', tourney: 'PUBG Mobile Summer Clash 2025', team: 'F2D Esports' },
      { date: '2025-04-27', place: '11th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'ViperxS1' },
      { date: '2025-04-30', place: '2nd', tier: 'B-Tier', tourney: 'IESF National Qualifiers - Pakistan 2025', team: 'ViperxS1' },
       { date: '2024-10-27', place: '6th', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown', team: 'VLR Esports' },
      { date: '2025-04-27', place: '11th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'ViperxS1' },
      { date: '2025-03-16', place: '6th', tier: 'C-Tier', tourney: 'PUBG Mobile Iftar Showdown 2025', team: 'ViperxS1' },
       { date: '2024-12-15', place: '6th', tier: 'C-Tier', tourney: 'PUBG Mobile realme NUMBER 13', team: 'Metershot Esports' },
      { date: '2023-04-09', place: '11th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'AS Esports' },
      { date: '2022-01-22', place: '10th', tier: 'B-Tier', tourney: 'Gamers Galaxy Pakistan 2021', team: 'Flames 1' },
       { date: '2025-11-19', place: '3rd', tier: 'C-Tier', tourney: 'PUBG Mobile Stallions Series 2025: South Asia Qualifier', team: 'Red Death' },
      { date: '2022-10-09', place: '2nd', tier: 'D-Tier', tourney: 'Team Chronicles All Talent Pro League', team: 'F2D Esports' },
      { date: '2025-01-12', place: '1st', tier: 'D-Tier', tourney: 'Proving Grounds By Bloodmoon Esports', team: 'Metershot Esports' },
       { date: '2023-09-01', place: '1st', tier: 'D-Tier', tourney: 'Smokey Esport Aniversary Event', team: 'Metershot Esports' },
      { date: '2021-09-30', place: '3rd', tier: 'D-Tier', tourney: 'Pubg Mobile Trophy of Independance', team: 'B4xNFPTCG' },
      { date: '2025-12-06', place: '3rd', tier: 'D-Tier', tourney: 'IHS Elite Battle', team: 'Oxy Esports' },
       { date: '2026-04-19', place: '10th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: 'Oxy Esports' },
    ],

    history: [
      { join: '2022', leave: '-', team: 'B4xTCG' },
      { join: '2022', leave: '-', team: 'Flames 1' },
      { join: '2023-01-17', leave: '2023-06-21', team: 'The Finishers' },
      { join: '2023-06-28', leave: '2024-04-28', team: 'F2D Esports' },
      { join: '2024-05-02', leave: '2024-08-21', team: 'Valyrian Esport' },
      { join: '2024-08-28', leave: '2024-11-15', team: 'Metershot Esports' },
      { join: '2025-03-01', leave: '2025-5-24', team: 'ViperxS1' },
       { join: '2025-10-12', leave: '2025-06-02', team: 'F2D Esports' },
      { join: '2026-01-03', leave: 'Present', team: 'Oxy Esports' },
    ]
  },
  'hadee': {
    name: 'Abdul Hadi',
    nick: 'Hadi',
    image: '/mythhadiesppic.jpg',
    teamLogo: '/mythicalslogo.jpg',
    teamName: 'Mythicals',
    nationality: 'Pakistan',
    born: 'Sep 6, 2006 (age 19)',
    status: 'Not Active',
    bio: (
      <p style={{ margin: 0 }}>
        Abdul Hadi <strong style={{ color: '#fff' }}>"Hadi"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Not Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who last played for <span style={{ color: '#22C55E', fontWeight: 700 }}>Mythicals</span>.
      </p>
    ),
    achievements: [
        { date: '2022-12-15', place: '11th', tier: 'C-Tier', tourney: 'B4 Lan Fiesta Multan', team: 'Qrf Esports' },
         { date: '2022-12-25', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2022', team: 'XGeneration' },
      { date: '2021-01-18', place: '11th', tier: 'B-Tier', tourney: 'Pubg Mobile PakvsInd By KOD Esports', team: 'Mythicals' },
      { date: '2023-02-11', place: '7th', tier: 'B-Tier', tourney: 'PUBG Mobile Underdog Clash Season 1', team: 'PTG Gaming' },
       { date: '2023-02-12', place: '11th', tier: 'B-Tier', tourney: 'Gamekey Arena', team: 'KOD Esports' },
        { date: '2025-12-28', place: '16th', tier: 'C-Tier', tourney: 'PUBG Mobile Campus Battle Pakistan 2025', team: '4Pro Marshals' },
          { date: '2023-02-12', place: '6th', tier: 'D-Tier', tourney: 'North Face Pakistan Winter League', team: '4Pro Marshals' },
          { date: '2021-01-04', place: '13th', tier: 'A-Tier', tourney: 'PUBG Mobile Pakistan Challenge 2020', team: 'Virus' },
    ],
    history: []
  },
   'jagga': {
    name: 'Muhammad Saqib Khan',
    nick: 'Jagga',
    image: '/jaggaesppic.jpg',
    teamLogo: '/Hyperlogo.jpg',
    teamName: 'Hyper Esports',
    nationality: 'Pakistan',
    born: 'May 4, 2002 (age 24)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Muhammad Saqib Khan Niazi <strong style={{ color: '#fff' }}>"Jagga"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Hyper Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2021-07-30', place: '3rd', tier: 'D-Tier', tourney: 'Pubg Mobile Sage League Season 2', team: 'TFD Esports' },
      { date: '2021-09-03', place: '2nd', tier: 'D-Tier', tourney: 'PMC Season 2', team: 'TFD Esports' },
      { date: '2021-09-30', place: '', tier: 'B-Tier', tourney: 'Codashop Global Series Pakistan', team: 'TFD Esports' },
       { date: '2021-11-04', place: '1st', tier: 'D-Tier', tourney: 'Pubg Mobile Queen Empire Mini Cup Season 1', team: 'TFD Esports' },
        { date: '2022-10-11', place: '2nd', tier: 'D-Tier', tourney: 'Smokey Summer Clash Season 1', team: 'Metershot Esports' },
          { date: '2023-04-05', place: '3rd', tier: 'D-Tier', tourney: 'Dark Cube Esports Ramadan League', team: 'Tag Esports' },
            { date: '2022-08-24', place: '1st', tier: 'D-Tier', tourney: 'Summer Riot Cup Presented By BHL', team: 'Flex Esports' },
      { date: '2022-11-22', place: '16th', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Asia Fall 2022', team: '7Sins' },
      { date: '2023-05-20', place: '12th', tier: 'C-Tier', tourney: 'Saadat of Umrah', team: 'TFD Esports' },
    ],
    history: [
      { join: '2019', leave: '2022-04-01', team: 'TFD Esports' },
      { join: '2022-04-01', leave: '2022-07-01', team: 'LQ5' },
      { join: '2022-07-01', leave: '2022-10-01', team: 'Flex Esports' },
      { join: '2022-10-01', leave: '2023-05-01', team: '7Sins' },
      { join: '2023-05-01', leave: '2024-01-01', team: 'Tag Esports' },
      { join: '2024-01-01', leave: '2025-05-01', team: 'GPA' },
      { join: '2025-05-01', leave: '2026-01-01', team: 'Tag Esports' },
      { join: '2026-01-01', leave: 'Present', team: 'Hyper Esports' },
    ]
  },
   'bunny': {
    name: 'Arbaz',
    nick: 'Bunny',
    image: '/d5bunnypic.jpg',
    teamLogo: '/d5logo.png',
    teamName: 'Demolition 5',
    nationality: 'Pakistan',
    born: '26 October 2007 (age 19)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Arbaz <strong style={{ color: '#fff' }}>"Bunny"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Demolition 5</span>.
      </p>
    ),
    achievements: [
        { date: '2026-02-15', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile Spring Cup 2026', team: 'Demolition 5' },
      { date: '2025-08-06', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile realme NUMBER 14', team: 'Demolition 5' },
      { date: '2025-09-18', place: '1st', tier: 'C-Tier', tourney: 'The Mite University Lan Event Season 2 ', team: 'Demolition 5' }, 
      { date: '2026-02-16', place: '4th', tier: 'C-Tier', tourney: 'SMEC 2026 x Kovax Tribe', team: 'Demolition 5' },
       { date: '2026-03-09', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBGM RAMZAN SERIES 2026', team: 'Demolition 5' },
    ],
  
    history: [
      { join: '-', leave: 'Present', team: 'Demolition 5' },
    ]
  },
  'arsim': {
    name: 'Arsim',
    nick: 'Arsim',
    image: '/arsimnew.jpg',
    teamLogo: '/404logo.png',
    teamName: '404 Esports',
    nationality: 'Pakistan',
    born: '14 August, 2007 (age 19)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Arsim <strong style={{ color: '#fff' }}>"Arsimop"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>404 Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2024-01-17', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG MOBILE IGE Masters: Pakistan', team: 'Trouble Makers' },
      { date: '2025-07-20', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile Summer Clash 2025', team: '404 Esports' },
      { date: '2026-01-04', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile Winter Rumble 2025', team: '404 Esports' }, 
      { date: '2024-02-01', place: '18th', tier: 'C-Tier', tourney: 'Levitate Breakpoint 1.0', team: 'Bloodmoon' },
       { date: '2025-03-17', place: '3rd', tier: 'C-Tier', tourney: 'PUBGM Kaza Lan Event', team: 'Radical Death' },
       { date: '2026-05-06', place: '1st', tier: 'D-Tier', tourney: 'Ultimate Showdown Season 1 by Virtual Assasins', team: '404 Esports' },

    ],
  
    history: [
      { join: '2022', leave: '2023', team: 'Radical Death' },
       { join: '2024-01-04', leave: '2024-03-09', team: 'Trouble Makers' },
        { join: '2024-09-20', leave: 'Present', team: '404 Esports' },
    ]
  },
   'gyro': {
    name: 'Inam-ur-Rehman',
    nick: 'Gyro',
    image: '/gyroEsp-pic.png',
    teamLogo: '/Unixlogo.jpg',
    teamName: 'Unix Esports',
    nationality: 'Pakistan',
    born: '04 January 2006 (age 20)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Inam-ur-Rehman <strong style={{ color: '#fff' }}>"Gyro"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Hox Esports & Coach at A8 Academy</span>.
      </p>
    ),
    achievements: [
        { date: '2025-04-24', place: '13th', tier: 'C-Tier', tourney: 'PUBG Mobile 141 Survivor Rumble Chapter 2', team: 'Unix Esport' },
          { date: '2025-08-17', place: 'SemiFinals', tier: 'D-Tier', tourney: 'Pubg Mobile Creeds Rebel Season 2 by Maxebels', team: 'Unix Esport' },
      { date: '2024-10-29', place: '9th', tier: 'C-Tier', tourney: 'PUBGM Juggernaut S2 Presented by SSP', team: 'Unix Esport' },
      { date: '2025-08-29', place: 'SemiFinals', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Fall 2025', team: 'Unix Esport' }, 
      { date: '2025-08-06', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile realme NUMBER 14', team: 'Unix Esport' },
       { date: '2025-11-19', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile Stallions Series 2025: South Asia Qualifier', team: 'Unix Esport' },
    ],
  
    history: [
       { join: '', leave: '', team: 'Unix Esport' },
      { join: '', leave: 'Present', team: 'Hox Esports' },
       { join: '2026-03-23', leave: 'Present', team: 'A8 Academy' },
    ]
  },
   'hackur': {
    name: 'Umair Mengal',
    nick: 'Hackur',
    image: '/HackurEspPic.png',
    teamLogo: '/fma-esports-logo.jpg',
    teamName: 'FMA Esports',
    nationality: 'Pakistan',
    born: '11 February 2004 (age 22)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Umair Mengal <strong style={{ color: '#fff' }}>"Hackur"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>FMA Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2024-10-27', place: '6th', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown', team: 'VLR Esports' },
         { date: '2024-10-27', place: '3rd', tier: 'B-Tier', tourney: 'PUBG Mobile Iron Squad Showdown City Finals Multan', team: 'VLR Esports' },
      { date: '2025-04-27', place: '8th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'FMA Esports' },
      { date: '2025-08-31', place: '9th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Fall 2025', team: 'FMA Esports' }, 
      { date: '2026-04-19', place: '16th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: 'Team RPG' },
    ],
  
    history: [
       { join: '2024-10-27', leave: '', team: 'Valyrians' },
       { join: '2025-04-27', leave: '2026-04-12', team: 'FMA Esports' },
      { join: '2026-04-18', leave: '2026-04-19', team: 'RPG Esports' },
      { join: '2026-04-25', leave: 'Present', team: 'FMA Esports' },
    ]
  },
  'codex': {
    name: 'Muhammad Ghous',
    nick: 'Codex',
    image: '/Codex-EspPic.png',
    teamLogo: '/A8Logo.jpg',
    teamName: 'A8 Academy',
    nationality: 'Pakistan',
    born: '20 January 2005 (age 21)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Muhammad Ghous <strong style={{ color: '#fff' }}>"Codex"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> Coach & Analyst who is currently working with <span style={{ color: '#22C55E', fontWeight: 700 }}>A8 Academy & Hyper Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2026-04-21', place: '2nd', tier: 'D-Tier', tourney: 'SSP Rumble Showdown', team: 'F4K Esports' },
         { date: '2026-04-14', place: '2nd', tier: 'D-Tier', tourney: 'PUBG Mobile FFC Season 3 by AJ', team: 'F4K Esports' },
      { date: '2026-04-27', place: '1st', tier: 'D-Tier', tourney: 'PUBG Mobile SFA Season 3 by AJ', team: 'F4K Esports' },
      { date: '2026-04-22', place: '2nd', tier: 'D-Tier', tourney: 'PUBG Mobile Ultimate Showdown', team: 'F4K Esports' }, 
      { date: '2026-02-15', place: 'SemiFinals', tier: 'C-Tier', tourney: 'PUBG Mobile Spring Cup 2026', team: 'Hyper Esport' },
    ],
  
    history: [],
    staffHistory: [
      { join: '2026-04-17', leave: 'Present', team: 'A8 Academy', role: 'Analyst' },
      { join: '-', leave: 'Present', team: 'Hyper Esports', role: 'Analyst' },
       { join: '2026-04-08', leave: '2026-05-27', team: 'Demon Esports', role: 'Analyst' }
    ]
  },
   'gunda': {
    name: 'Uzair Khalid',
    nick: 'Gunda',
    image: '/GundaEspPic.jpeg',
    teamLogo: '/globalwizesportslogo.jpg',
    teamName: 'Global Wiz Esports',
    nationality: 'Pakistan',
    born: '',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Uzair Khalid <strong style={{ color: '#fff' }}>"Gunda"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Global Wiz Esports</span>.
      </p>
    ),
    achievements: [
    ],
  
    history: [
    ]
  },
   'sami': {
    name: 'Muhammad Sami',
    nick: 'Sami',
    image: '/samiUpdated Pic.jpg',
    teamLogo: '/executorlogo.jpg',
    teamName: 'The Executor',
    nationality: 'Pakistan',
    born: '11 Nov 2003 (age 23)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Muhammad Sami <strong style={{ color: '#fff' }}>"Sami"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>The Executor</span>.
      </p>
    ),
    achievements: [
        { date: '2022-12-15', place: '7th', tier: 'C-Tier', tourney: 'B4 Lan Fiesta Multan', team: 'Murshad Esport' },
        { date: '2025-09-12', place: '1st', tier: 'D-Tier', tourney: 'The Dead Sea by Global Clan Wars', team: 'Exora Titans' },
        { date: '2026-01-10', place: '1st', tier: 'D-Tier', tourney: 'Pubg Mobile Winter Clash Season 3', team: 'Team FLC' },
        { date: '2025-07-18', place: 'SemiFinals', tier: 'C-Tier', tourney: 'GameBird PUBG Mobile Summer Series', team: 'CNF Esports' },
        { date: '2025-06-12', place: '1st', tier: 'D-Tier', tourney: 'Pubg Mobile Summer Blast by Valor Edge', team: '9Eleven Esport' },
          { date:'2025-08-18', place: '1st', tier: 'D-Tier', tourney: 'Pubg Mobile Conquest Series Season 1', team: '9Eleven Esport' },
          { date:'2025-03-08', place: '2nd', tier: 'D-Tier', tourney: 'SSP Scrims Arena', team: '9Eleven Esport' },
    ],
  
    history: [
      { join: '2019', leave: '2020', team: 'SINNER' },
      { join: '2020', leave: '2022', team: 'Vanguard' },
      { join: '2022', leave: '2024', team: 'Murshad' },
      { join: '2024', leave: '2025', team: '9Eleven' },
      { join: '2025', leave: '2025', team: 'HYPER' },
      { join: '2025', leave: '2026', team: 'CHRONICALLY FORCE' },
      { join: '2026', leave: 'Present', team: 'THE EXECUTOR' },
    ]
  },
   'jin': {
    name: 'Toseef Haider',
    nick: 'Jin',
    image: '/jinEsportPic.jpg',
    teamLogo: '/3xlogo.png',
    teamName: '3x Esports',
    nationality: 'Pakistan',
    born: '24 December 2002 (age 24)',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Touseef Haider <strong style={{ color: '#fff' }}>"Jin"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>3x Esports</span>.
      </p>
    ),
    achievements: [
        { date: '2021-01-04', place: 'SemiFinals', tier: 'A-Tier', tourney: 'PUBG Mobile Pakistan Challenge 2020', team: '' },
        { date: '2023-05-20', place: '11th', tier: 'C-Tier', tourney: 'Saadat of Umrah', team: 'R360 Esports' },
        { date: '2024-02-04', place: '11th', tier: 'C-Tier', tourney: 'IGE Masters Pakistan', team: 'R360 Esports' },
        { date: '2023-12-31', place: 'Finals', tier: 'B-Tier', tourney: 'Dew Gamers Arena 2023', team: 'R360 Esports' },
        { date: '2022-12-25', place: 'SemiFinals', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2022', team: 'R360 Esports' },
          { date:'2026-04-19', place: 'SemiFinals', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: '3x Esports' },
    ],
  
    history: [
      { join: '-', leave: '-', team: 'AES' },
      { join: '-', leave: '-', team: '2x' },
      { join: '-', leave: '-', team: 'ZARAR ESPORTS' },
      { join: '-', leave: '-', team: 'POWER HOUSE' },
      { join: '-', leave: '-', team: 'OVERKILL' },
      { join: '-', leave: '-', team: 'MS' },
      { join: '-', leave: '-', team: 'MSxR360' },
      { join: '-', leave: '-', team: 'Hashtag esports' },
      { join: '-', leave: '-', team: 'Megatron' },
      { join: '-', leave: '-', team: 'C4' },
      { join: '-', leave: 'Present', team: '3x Esports' },
    ]
  },
   'captain': {
    name: 'Shahzada Anzal',
    nick: 'Captain',
    image: '/captnEspPic.jpg',
    teamLogo: '/RST Esports.png',
    teamName: 'Red Saints',
    nationality: 'Pakistan',
    born: '',
    status: 'Active',
    bio: (
       <p style={{ margin: 0 }}>
        Shahzada Anzal <strong style={{ color: '#fff' }}>"Captain"</strong>  is a <span style={{ color: '#22C55E', fontWeight: 600 }}>Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#22C55E', fontWeight: 700 }}>Red Saints</span>.
      </p>
    ),
    achievements: [
        { date: '2022-12-25', place: '15th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2022', team: 'Myth Esports' },
        { date: '2024-04-21', place: '7th', tier: 'B-Tier', tourney: 'Gamers Galaxy Pakistan 2024', team: 'Red Saints' },
        { date: '2024-05-09', place: '1st', tier: 'D-Tier', tourney: 'Destroyer Clan War Seaon Zero', team: 'Red Saints' },
        { date: '2024-07-27', place: '5th', tier: 'C-Tier', tourney: 'PUBG Mobile Jazba Series 2024', team: 'Red Saints' },
        { date: '2026-02-15', place: '2nd', tier: 'C-Tier', tourney: 'PUBG Mobile Spring Cup 2026', team: 'Red Saints' },
          { date:'2026-04-19', place: '4th', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan 2026 Spring', team: 'Red Saints' },
          { date:'2026-05-17', place: '16th', tier: 'A-Tier', tourney: 'PUBG Mobile Global Open 2026 Season 1 - South Asia Finals', team: 'Red Saints' },
    ],
  
    history: [
      { join: '', leave: 'Present', team: 'Red Saints' },
    ]
  },
  'baba': {
    name: 'Asad Nadeem Mughal',
    nick: 'Baba',
    image: '',
    teamLogo: '',
    teamName: '',
    nationality: '',
    born: '',
    status: '',
    bio: <></>,
    achievements: [],
    history: [
      { join: '2020-03-08', leave: '2020-08-05', team: 'Free Style' },
      { join: '2021-02-09', leave: '2021-09-05', team: 'Portal Esports' },
      { join: '2021-09-05', leave: '2022-05-19', team: 'WallStreet Bets' }
    ]
  },
  '420boy': {
    name: 'Abdullah Khan',
    nick: 'Khan420',
    image: '',
    teamLogo: '',
    teamName: '',
    nationality: '',
    born: '',
    status: '',
    bio: <></>,
    achievements: [],
    history: [
      { join: '2021-08-05', leave: '2021-09-05', team: 'Team Bablu' },
      { join: '2021-09-05', leave: '2022-05-28', team: 'Clarity Esports' },
      { join: '2022-05-28', leave: '2022-06-??', team: 'Team Bablu' },
      { join: '2022-06-??', leave: '2023-01-12', team: 'Team QWERTY' },
      { join: '2023-01-12', leave: '2023-02-20', team: '7E X QR RAGE' },
      { join: '2023-03-05', leave: '2023-06-03', team: 'Magnus Esports' },
      { join: '2023-06-08', leave: '2023-12-04', team: 'R3GICIDE' },
      { join: '2023-12-04', leave: '2024-01-25', team: 'Oxygen Esports' },
      { join: '2024-01-25', leave: '2024-03-??', team: 'R9 Esports' },
      { join: '2024-03-??', leave: '2024-06-27', team: 'R3GICIDE' },
      { join: '2024-10-01', leave: '2024-12-05', team: 'Viper Xotics' },
      { join: '2024-12-05', leave: '', team: 'Retired' }
    ]
  },
  'ashad': {
    name: 'Ashad Ali',
    nick: 'Ashad',
    image: '',
    teamLogo: '',
    teamName: '',
    nationality: '',
    born: '',
    status: '',
    bio: <></>,
    achievements: [
      { date: '2025-06-22', place: '9th', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central & South Asia Spring 2025', team: 'Viper x Knockout' },
      { date: '2025-04-27', place: '3rd', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: 'Viper x Knockout' },
      { date: '2023-11-12', place: '42nd - 44th', tier: 'S-Tier', tourney: 'PUBG Mobile Global Championship 2023', team: 'Seventh Element' },
      { date: '2023-09-03', place: '6th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Fall 2023', team: 'Seventh Element' },
      { date: '2023-08-20', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2023', team: 'Seventh Element' },
      { date: '2023-06-27', place: '1st', tier: 'C-Tier', tourney: 'PUBG Mobile Vacation Vandetta 2023', team: 'Seventh Element' },
      { date: '2023-05-20', place: '1st', tier: 'C-Tier', tourney: 'Saadat of Umrah', team: 'Seventh Element' },
      { date: '2023-04-09', place: '6th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'Seventh Element' },
      { date: '2022-10-16', place: '16th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Fall 2022', team: 'R3G Esports' },
      { date: '2022-10-02', place: '6th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2022', team: 'R3G Esports' }
    ],
    history: [
      { join: '2021-10-05', leave: '2022-07-13', team: 'Flames 1 Esports' },
      { join: '2022-08-??', leave: '2023-03-01', team: 'R3G Esports' },
      { join: '2023-03-01', leave: '2023-12-02', team: 'Seventh Element' },
      { join: '2023-12-02', leave: '2024-09-07', team: 'XGeneration' },
      { join: '2024-09-07', leave: '2025-06-28', team: 'Viper x Knockout' },
      { join: '2025-07-29', leave: '2026-01-28', team: 'Oxygen Esports' },
      { join: '2026-01-28', leave: '2026-04-01', team: 'XGeneration' }
    ]
  },
  'blade': {
    name: 'Abir Kazimi',
    nick: 'BLADE',
    image: '',
    teamLogo: '',
    teamName: '',
    nationality: 'Belgium',
    born: '',
    status: 'Not-Active',
    bio: <></>,
    achievements: [
      { date: '2023-09-03', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Fall 2023', team: 'AGONxi8 Esports' },
      { date: '2023-08-20', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2023', team: 'AGONxi8 Esports' },
      { date: '2023-07-13', place: '8th', tier: 'S-Tier', tourney: 'PUBG Mobile World Invitational 2023: Allstars Stage', team: 'AGONxi8 Esports' },
      { date: '2023-04-09', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'AGONxi8 Esports' },
      { date: '2023-02-12', place: '1st', tier: 'B-Tier', tourney: 'Gamekey Arena', team: 'AGONxi8 Esports' },
      { date: '2022-12-04', place: '24th', tier: 'S-Tier', tourney: 'PUBG Mobile Global Championship 2022', team: 'AGONxi8 Esports' },
      { date: '2022-10-16', place: '4th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Fall 2022', team: 'AGONxi8 Esports' },
      { date: '2022-10-02', place: '1st', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2022', team: 'i8 Esports' },
      { date: '2022-04-17', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2022', team: 'Saltxi8' },
      { date: '2021-08-29', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Fall Split 2021: Pakistan', team: 'i8 Esports' }
    ],
    history: [
      { join: '2021-02-16', leave: '2021-06-13', team: 'Stalwart Esports' },
      { join: '2021-06-13', leave: '2021-12-27', team: 'i8 Esports' },
      { join: '2021-12-27', leave: '2022-05-05', team: 'SALTxi8 Esports' },
      { join: '2022-05-05', leave: '2022-10-03', team: 'i8 Esports' },
      { join: '2022-10-03', leave: '2023-04-19', team: 'AGONxi8 Esports' },
      { join: '2024-02-06', leave: '2024-06-27', team: 'Rage Esports' },
      { join: '2024-06-27', leave: '2024-09-30', team: 'R3GICIDE' },
      { join: '2024-09-30', leave: '2025-02-05', team: 'LOU Esports' },
      { join: '2025-02-05', leave: '2025-03-24', team: 'R3GICIDE' },
      { join: '2025-03-24', leave: '', team: 'Retired' }
    ]
  },
  'black': {
    name: 'Haseeb Nasir',
    nick: 'Black',
    image: '/fsBlackPic.png',
    teamLogo: '/freestyle-logo.jpg',
    teamName: 'Free Style',
    nationality: 'Pakistan',
    born: 'July 16, 1999 (age 26)',
    status: 'Active',
    bio: (
      <p style={{ margin: 0 }}>
        Haseeb Nasir <strong style={{ color: '#fff' }}>"Black"</strong> is a <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who is currently playing for <span style={{ color: '#FACC15', fontWeight: 700 }}>Free Style</span>.
      </p>
    ),
    achievements: [
      { date: '2026-04-19', place: '2nd', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Kenya 2026 Spring', team: 'Res' },
      { date: '2023-04-09', place: '15th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: 'FS' },
      { date: '2022-10-02', place: '8th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2022', team: 'FS' },
      { date: '2022-05-22', place: '14th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Spring 2022', team: 'FS' },
      { date: '2022-04-17', place: '6th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2022', team: 'FS' },
      { date: '2021-08-29', place: '7th', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Fall Split 2021: Pakistan', team: 'FS' },
      { date: '2021-07-07', place: '8th', tier: 'A-Tier', tourney: 'Ultimate Warrior Showdown 2021', team: 'STE' },
      { date: '2020-11-08', place: '13th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Season 2', team: 'STE' },
      { date: '2020-08-09', place: '17th', tier: 'S-Tier', tourney: 'PUBG Mobile World League 2020: East', team: 'FS' },
      { date: '2020-03-08', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - 2020 Spring Split: Pakistan', team: 'FS' }
    ],
    history: [
      { join: '2020-03-08', leave: 'Present', team: 'Free Style' },
      { join: '2020-05-07', leave: 'Present', team: 'Stalwart Esports' },
      { join: '2020-12-07', leave: 'Present', team: 'Free Style' }
    ]
  },
  'cairo': {
    name: '',
    nick: 'Cairo',
    image: '',
    teamLogo: '',
    teamName: '',
    nationality: 'Pakistan',
    born: '',
    status: '',
    bio: <></>,
    achievements: [
      { date: '2025-12-07', place: '19th', tier: 'S-Tier', tourney: 'PUBG Mobile Global Championship 2025', team: 'IC' },
      { date: '2025-10-15', place: '9th', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central & South Asia Fall 2025', team: 'IC' },
      { date: '2025-08-03', place: '7th', tier: 'S-Tier', tourney: 'PUBG Mobile World Cup 2025', team: '4T' },
      { date: '2025-06-22', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Super League - Central & South Asia Spring 2025', team: '4T' },
      { date: '2025-05-11', place: '1st', tier: 'B-Tier', tourney: 'ESAN PUBG Mobile Asian Showdown', team: 'PAK' },
      { date: '2025-04-27', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Spring 2025', team: '4T' },
      { date: '2023-08-20', place: '4th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Fall 2023', team: 'SR | 3x' },
      { date: '2023-04-09', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2023', team: '3x' },
      { date: '2023-02-12', place: '2nd', tier: 'B-Tier', tourney: 'Gamekey Arena', team: '3x' },
      { date: '2022-08-27', place: '2nd', tier: 'B-Tier', tourney: 'PUBG Mobile Campus Challenge Pakistan 2022', team: 'Rage' }
    ],
    history: [
      { join: '2021-08-17', leave: 'Present', team: '52 Esports' },
      { join: '2022-07-??', leave: '2022-11-01', team: 'Team Faulty Devils' },
      { join: '2022-07-??', leave: '2022-11-01', team: 'Team Faulty Devils' },
      { join: '2022-11-01', leave: '2024-04-09', team: 'SR | 3x Esports' },
      { join: '2024-04-09', leave: '2024-04-26', team: 'Guts & Glory' },
      { join: '2024-04-26', leave: '2024-06-13', team: 'WAOW Esports' },
      { join: '2024-06-13', leave: '2024-07-12', team: 'Guts & Glory' },
      { join: '2024-07-12', leave: '2024-09-14', team: 'Leo Esports' },
      { join: '2024-09-14', leave: '2024-12-01', team: 'Guts & Glory' },
      { join: '2024-12-01', leave: '2025-09-06', team: '4Thrives Esports' },
      { join: '2025-09-06', leave: '2025-12-15', team: 'IC' },
      { join: '2025-12-15', leave: '2025-12-16', team: '4Thrives Esports' },
      { join: '2025-12-16', leave: '2026-01-08', team: 'Guts & Glory' },
      { join: '2026-01-08', leave: 'Present', team: 'Aminz Esports' },
      { join: '2026-04-09', leave: '', team: 'Banned' }
    ]
  },
  'crypto': {
    name: 'Raja Haseeb',
    nick: 'CRYPTO',
    image: '',
    teamLogo: '',
    teamName: 'AS i8 Esports',
    nationality: 'Pakistan',
    born: 'June 28, 2004 (age 21)',
    status: 'Active',
    bio: <></>,
    achievements: [
      { date: '2025-08-31', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile National Championship Pakistan Fall 2025', team: 'ASi8' },
      { date: '2024-04-21', place: '1st', tier: 'B-Tier', tourney: 'Gamers Galaxy Pakistan 2024', team: 'i8 Esports' },
      { date: '2023-12-24', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - South Asia 2023', team: 'AGONxi8 Esports' },
      { date: '2023-07-16', place: '16th', tier: 'S-Tier', tourney: 'PUBG Mobile World Invitational 2023', team: 'Twsited Minds' },
      { date: '2023-04-19', place: '1st', tier: 'A-Tier', tourney: 'Saudi League 2023 Season 1', team: 'Twsited Minds' },
      { date: '2023-02-12', place: '1st', tier: 'B-Tier', tourney: 'Gamekey Arena', team: 'AGONxi8 Esports' },
      { date: '2022-05-22', place: '4th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Spring 2022', team: 'i8 Esports' },
      { date: '2022-04-17', place: '3rd', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - Pakistan Spring 2022', team: 'Saltxi8' },
      { date: '2021-08-29', place: '1st', tier: 'B-Tier', tourney: 'PUBG Mobile Club Open - Fall Split 2021: Pakistan', team: 'i8 Esports' },
      { date: '2021-06-13', place: '4th', tier: 'A-Tier', tourney: 'PUBG Mobile Pro League - South Asia Championship Season 1', team: 'STE' }
    ],
    history: [
      { join: '2021-02-16', leave: '2021-06-13', team: 'Stalwart Esports' },
      { join: '2021-06-13', leave: '2021-12-27', team: 'i8 Esports' },
      { join: '2021-12-27', leave: '2022-05-05', team: 'SALTxi8 Esports' },
      { join: '2022-05-05', leave: '2022-06-20', team: 'i8 Esports' },
      { join: '2022-07-04', leave: '2023-01-20', team: 'Unicorns of Love' },
      { join: '2023-03-17', leave: '2023-11-14', team: 'Twisted Minds' },
      { join: '2023-11-14', leave: '2024-06-23', team: 'ASagi8 Esports' },
      { join: '2024-06-26', leave: '2024-09-30', team: '52 Esports' },
      { join: '2024-09-30', leave: '2024-12-05', team: 'LOU Esports' },
      { join: '2024-12-05', leave: 'Present', team: 'AS i8 Esports' }
    ]
  }
};


import { urlForImage } from '../../../../sanity/image';

function renderSanityBio(bioText: string, teamName: string) {
  if (!bioText) return null;
  const escapedTeamName = teamName ? teamName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
  const teamRegexPart = escapedTeamName ? `|${escapedTeamName}` : '';
  const regex = new RegExp(`("[^"]+"|Pakistani|Active|Not Active|Not-Active|Free Agent${teamRegexPart})`, 'gi');
  const parts = bioText.split(regex);
  
  return (
    <p style={{ margin: 0 }}>
      {parts.map((part, index) => {
        if (!part) return null;
        const lowerPart = part.toLowerCase();
        
        if (part.startsWith('"') && part.endsWith('"')) {
          return <strong key={index} style={{ color: '#fff' }}>{part}</strong>;
        }
        if (lowerPart === 'pakistani') {
          return <span key={index} style={{ color: '#fff', fontWeight: 600 }}>{part}</span>;
        }
        if (lowerPart === 'active' || lowerPart === 'free agent') {
          return <span key={index} style={{ color: '#22C55E', fontWeight: 600 }}>{part}</span>;
        }
        if (lowerPart === 'not active' || lowerPart === 'not-active') {
          return <span key={index} style={{ color: '#e74c3c', fontWeight: 600 }}>{part}</span>;
        }
        if (escapedTeamName && lowerPart === teamName.toLowerCase()) {
          return <span key={index} style={{ color: '#22C55E', fontWeight: 700 }}>{part}</span>;
        }
        
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

export default function PlayerProfileClient({ slug, sanityData }: { slug: string, sanityData?: any }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const localPlayer = PLAYERS_DATA[slug.toLowerCase()];
  
  // Combine local and sanity data. Sanity takes precedence.
  const player = sanityData || localPlayer ? {
    ...localPlayer,
    name: sanityData?.name || localPlayer?.name || '',
    nick: sanityData?.nick || localPlayer?.nick || '',
    teamName: sanityData?.teamName || localPlayer?.teamName || '',
    teamLogo: sanityData?.teamLogo ? urlForImage(sanityData.teamLogo).url() : localPlayer?.teamLogo || '',
    nationality: sanityData?.nationality || localPlayer?.nationality || '',
    born: sanityData?.born || localPlayer?.born || '',
    status: sanityData?.status || localPlayer?.status || '',
    image: sanityData?.image ? urlForImage(sanityData.image).url() : localPlayer?.image || '',
    instagram: sanityData?.instagram || localPlayer?.instagram || '',
    bio: sanityData?.bio ? renderSanityBio(sanityData.bio, sanityData.team || localPlayer?.teamName || '') : localPlayer?.bio,
    achievements: sanityData?.achievements || localPlayer?.achievements || [],
    history: sanityData?.history || localPlayer?.history || [],
    staffHistory: sanityData?.staffHistory || localPlayer?.staffHistory || [],
  } : null;

  const sortedAchievements = player
    ? [...player.achievements].sort((a, b) => {
        const tierDiff = (TIER_PRIORITY[a.tier] ?? 99) - (TIER_PRIORITY[b.tier] ?? 99);
        if (tierDiff !== 0) return tierDiff;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    : [];

  if (!player) {
    return (
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Player Not Found</h1>
          <BackButton variant="default" style={{ marginTop: '20px', borderRadius: '8px' }}>Go Back</BackButton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      <div className="dynamic-grid" />

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div style={{ position: 'absolute', top: '20px', right: '30px', color: '#fff', fontSize: '2rem', fontWeight: 300, cursor: 'pointer' }}>&times;</div>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <NextImage 
              src={player.image} 
              alt={player.nick} 
              width={800} 
              height={1000} 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '90vh', borderRadius: '8px', boxShadow: '0 0 50px rgba(34, 197, 94, 0.2)' }} 
            />
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Navigation */}
        <header style={{ padding: '1.5rem 1rem 0', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <BackButton variant="compact">&larr; Back</BackButton>
        </header>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '1rem 1rem 6rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          
          {/* Bio Text Section */}
          <div style={{ 
            color: '#D1D5DB', 
            fontSize: '1.05rem', 
            lineHeight: '1.6', 
            marginBottom: '3rem', 
            background: '#111827', 
            padding: '20px 24px', 
            borderRadius: '8px', 
            border: '1px solid #1f2937',
            borderLeft: '4px solid #22C55E'
          }}>
            {player.bio}
          </div>

          {/* Layout: Infobox Left, Achievements/History Right */}
          <div className="profile-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
            
            {/* Sidebar Column */}
            <div className="player-sidebar" style={{ 
              width: '280px', 
              flexShrink: 0, 
              border: '1px solid #3c3c3c', 
              background: 'rgba(20, 20, 20, 0.95)', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              position: 'sticky',
              top: '20px'
            }}>
              
              <div style={{ background: '#1a1a1a', padding: '12px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #3c3c3c', height: '52px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '15px', display: 'flex', alignItems: 'center' }}>
                  <NextImage src={player.teamLogo} alt="Logo" width={22} height={22} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>{player.nick}</span>
              </div>

              <div style={{ width: '100%', background: '#000', borderBottom: '1px solid #3c3c3c', overflow: 'hidden' }}>
                <div 
                  onClick={() => setIsLightboxOpen(true)} 
                  style={{ display: 'block', transition: 'transform 0.3s ease', cursor: 'zoom-in' }} 
                  className="player-img-container"
                >
                  <NextImage src={player.image} alt={player.nick} width={280} height={350} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(90deg, #1a1a1a 0%, #2c2c2c 100%)', padding: '10px 10px', textAlign: 'center', borderBottom: '1px solid #3c3c3c' }}>
                <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Player Information</h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.85rem' }}>
                <tbody>
                  {[
                    { label: 'Name:', value: player.name },
                    { label: 'Nationality:', value: player.nationality },
                    { label: 'Born:', value: player.born },
                    { label: 'Status:', value: player.status, color: player.statusColor || '#22C55E' },
                    { 
                      label: 'Team:', 
                      value: player.teamName, 
                      gradient: player.teamName === 'Galacticous' ? 'linear-gradient(to right, #ff4d4d, #f1c40f)' : 
                                player.teamName === 'FMA Esports' ? 'linear-gradient(to right, #ff0000, #000000)' : null,
                      color: player.teamName === 'Seventh Element' ? '#3498db' : player.teamName === 'Destroyer Esports' ? '#e74c3c' : '#fff' 
                    },
                  ].map((info, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#9CA3AF', width: '42%', textAlign: 'right', borderRight: '1px solid #3c3c3c', whiteSpace: 'nowrap' }}>{info.label}</td>
                      <td style={{ 
                        padding: '10px 12px', 
                        fontWeight: 800, 
                        background: info.gradient || 'none',
                        WebkitBackgroundClip: info.gradient ? 'text' : 'none',
                        WebkitTextFillColor: info.gradient ? 'transparent' : 'initial',
                        color: info.color || '#fff', 
                        textAlign: 'left', 
                        whiteSpace: 'nowrap' 
                      }}>{info.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Main Content Column: Achievements & History */}
            <div className="content-main" style={{ flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Achievements Section */}
              <section>
                <div style={{ 
                  background: '#1a1a1a', 
                  padding: '12px 20px', 
                  border: '1px solid #3c3c3c', 
                  borderBottom: 'none',
                  borderTopLeftRadius: '8px', 
                  borderTopRightRadius: '8px',
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{ width: '4px', height: '18px', background: '#22C55E', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1rem', fontWeight: 900, color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Achievements</h2>
                </div>
                
                <div style={{ border: '1px solid #3c3c3c', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', overflowX: 'auto', background: '#1a1a1a', WebkitOverflowScrolling: 'touch' }}>
                  <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
                    <thead style={{ background: 'linear-gradient(180deg, #2c2c2c 0%, #222 100%)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#ccc', fontWeight: 800 }}>
                      <tr>
                        <th style={{ padding: '15px', borderRight: '1px solid #3c3c3c', width: '20%', letterSpacing: '0.05em' }}>Date</th>
                        <th style={{ padding: '15px', borderRight: '1px solid #3c3c3c', width: '15%', letterSpacing: '0.05em', textAlign: 'center' }}>Place</th>
                        <th style={{ padding: '15px', borderRight: '1px solid #3c3c3c', width: '15%', letterSpacing: '0.05em', textAlign: 'center' }}>Tier</th>
                        <th style={{ padding: '15px', borderRight: '1px solid #3c3c3c', width: '35%', letterSpacing: '0.05em' }}>Tournament</th>
                        <th style={{ padding: '15px', width: '15%', letterSpacing: '0.05em', textAlign: 'center' }}>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedAchievements.map((ach, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #3c3c3c', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                          <td style={{ padding: '14px 15px', fontSize: '1.1rem', borderRight: '1px solid #3c3c3c', color: '#eee', fontWeight: 500 }}>{ach.date}</td>
                          <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                            <span style={{ display: 'inline-block', width: ach.place === 'SemiFinals' ? '90px' : '60px', padding: '6px 0', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 800, background: (ach.place === '1st' || ach.place === '3rd') ? '#a08a00' : ach.place === '5th' ? '#c9a227' : (ach.place === '7th' || ach.place === '8th') ? '#FFD700' : '#2c5f63', color: '#fff' }}>
                              {ach.place}
                            </span>
                          </td>
                          <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: ach.tier === 'A-Tier' ? '#FFD700' : '#a0c4ff' }}>{ach.tier}</span>
                          </td>
                          <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c' }}>
                            <span className="tourney-link" style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>{ach.tourney}</span>
                          </td>
                          <td style={{ padding: '14px 15px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {ach.team === 'Seventh Element' && (
                                <NextImage src="/SeventhElement-Logo.png" alt="Seventh Element" width={48} height={30} style={{ objectFit: 'contain' }} title="Seventh Element" />
                              )}
                              {ach.team === 'Koxav Esports' && (
                                <NextImage src="/Koxav-Logo.jpeg" alt="Koxav Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Koxav Esports" />
                              )}
                              {(ach.team === 'XGeneration' || ach.team === 'xgenerator') && (
                                <NextImage src="/Xg-Logo.jpeg" alt="XGeneration" width={48} height={30} style={{ objectFit: 'contain' }} title="XGeneration" />
                              )}
                               {(ach.team === 'ViperxS1') && (
                                <NextImage src="/S1logo.png" alt="ViperxS1" width={48} height={30} style={{ objectFit: 'contain' }} title="ViperxS1" />
                              )}
                               {(ach.team === 'Metershot Esports') && (
                                <NextImage src="/Mslogo.png" alt="Metershot Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Metershot Esports" />
                              )}
                               {(ach.team === 'Team H2E') && (
                                <NextImage src="/h2elogo.png" alt="Team H2E" width={48} height={30} style={{ objectFit: 'contain' }} title="Team H2E" />
                              )}
                               {(ach.team === 'Red Death') && (
                                <NextImage src="/RedDeathEsp.png" alt="Red Death" width={48} height={30} style={{ objectFit: 'contain' }} title="Red Death" />
                              )}
                               {(ach.team === '3x Esports' || ach.team === '3x') && (
                                <NextImage src="/3xlogo.png" alt="3x Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="3x Esports" />
                              )}
                              {(ach.team === '9Eleven Esport') && (
                                <NextImage src="/9Elevenlogo.jpeg" alt="9Eleven Esport" width={48} height={30} style={{ objectFit: 'contain' }} title="9Eleven Esport" />
                              )}
                              {(ach.team === 'AGONxi8 Esports') && (
                                <NextImage src="/Agonxi8 logo.png" alt="AGONxi8 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="AGONxi8 Esports" />
                              )}
                               {(ach.team === 'i8 Esports') && (
                                <NextImage src="/i8logo.png" alt="i8 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="i8 Esports" />
                              )}
                              {(ach.team === 'Saltxi8') && (
                                <NextImage src="/Saltxi8 logo - Copy.png" alt="Saltxi8" width={48} height={30} style={{ objectFit: 'contain' }} title="SALTxi8 Esports" />
                              )}
                              {(ach.team === 'CNF Esports') && (
                                <NextImage src="/CNFlogo.jpg" alt="CNF Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="CNF Esports" />
                              )}
                                {(ach.team === 'Twsited Minds') && (
                                <NextImage src="/twistedminds logo.jpg" alt="Twsited Minds" width={48} height={30} style={{ objectFit: 'contain' }} title="Twsited Minds" />
                              )}

                              {(ach.team === 'Spins Esport') && (
                                <NextImage src="/spinslogo.png" alt="Spins Esport" width={48} height={30} style={{ objectFit: 'contain' }} title="Spins Esport" />
                              )}
                              {(ach.team.trim() === 'Unix Esport' || ach.team.trim() === 'Unix Esports') && (
                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '34px', borderRadius: '5px', background: '#050505' }}>
                                  <NextImage src="/Unixlogo.jpg" alt="Unix Esport" width={48} height={30} unoptimized style={{ objectFit: 'contain' }} title="Unix Esports" />
                                </span>
                              )}
                              {(ach.team === 'FMA Esports') && (
                                <NextImage src="/fma-esports-logo.jpg" alt="FMA Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="FMA Esports" />
                              )}
                               {(ach.team === 'Team Bablu') && (
                                <NextImage src="/TeamBablu.png" alt="Team Bablu" width={48} height={30} style={{ objectFit: 'contain' }} title="Team Bablu" />
                              )}
                              {(ach.team === 'R3G Esports') && (
                                <NextImage src="/R3G logo.png" alt="R3G Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="R3G Esports" />
                              )}
                               {(ach.team === 'Clarity Esports') && (
                                <NextImage src="/Claritylogo.png" alt="Clarity Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Clarity Esports" />
                              )}
                              {(ach.team === 'Destroyer Esports') && (
                                <NextImage src="/Des-Logo.jpg" alt="Destroyer Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Destroyer Esports" />
                              )}
                              {(ach.team === '52 Esports') && (
                                <NextImage src="/52-Esport Logo.png" alt="52 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="52 Esports" />
                              )}
                              {(ach.team === 'IC') && (
                                <NextImage src="/Inner circle logo.png" alt="IC" width={48} height={30} style={{ objectFit: 'contain' }} title="IC" />
                              )}
                               {(ach.team === 'VLR Esports') && (
                                <NextImage src="/VLRlogo.png" alt="VLR Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="VLR Esports" />
                              )}
                              
                              {(ach.team === 'F2D Esports') && (
                                <NextImage src="/F2D-EsportLogo.jpg" alt="F2D Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="F2D Esports" />
                              )}
                              {(ach.team === 'MSxDTD') && (
                                <NextImage src="/Metershotxlogo.png" alt="MSxDTD" width={48} height={30} style={{ objectFit: 'contain' }} title="MSxDTD" />
                              )}
                              {(ach.team === 'Virus') && (
                                <NextImage src="/Viruslogo.png" alt="Virus" width={48} height={30} style={{ objectFit: 'contain' }} title="Virus Esport" />
                              )}
                              {(ach.team === 'F4K Esports') && (
                                <NextImage src="/f4klogo.jpg" alt="F4K Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="F4K Esports" />
                              )}
                              {(ach.team === '247Esports') && (
                                <NextImage src="/247Esp-Logo.png" alt="247Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="247Esports" />
                              )}
                              {(ach.team === 'Hashtag Esports') && (
                                <NextImage src="/HashtagEsports-logo.png" alt="Hashtag Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Hashtag Esports" />
                              )}
                              {(ach.team === 'Bloodmoon') && (
                                <NextImage src="/Bloodmoonlogo.png" alt="Bloodmoon" width={48} height={30} style={{ objectFit: 'contain' }} title="Bloodmoon" />
                              )}
                              {(ach.team === 'Galacticous') && (
                                <NextImage src="/Galacticous-logo.jpeg" alt="Galacticous" width={48} height={30} style={{ objectFit: 'contain' }} title="Galacticous" />
                              )}
                               {(ach.team === 'Hellraisers') && (
                                <NextImage src="/Hrlogo.png" alt="Hellraisers" width={48} height={30} style={{ objectFit: 'contain' }} title="Hellraisers" />
                              )}
                              {(ach.team === 'Unique Esports') && (
                                <NextImage src="/Unixlogo.jpg" alt="Unique Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Unique Esports" />
                              )}
                                 {(ach.team === 'Demolition 5') && (
                                <NextImage src="/d5logo.png" alt="Demolition 5" width={48} height={30} style={{ objectFit: 'contain' }} title="Demolition 5" />
                              )}
                              {(ach.team === 'Team QWERTY') && (
                                <NextImage src="/Qwerty-Logo.png" alt="Team QWERTY" width={48} height={30} style={{ objectFit: 'contain' }} title="Team QWERTY" />
                              )}
                              {(ach.team === 'Hyper Esport') && (
                                <NextImage src="/hyperlogo.png" alt="Hyper Esport" width={48} height={30} style={{ objectFit: 'contain' }} title="Hyper Esport" />
                              )}
                               {(ach.team === 'TFD Esports') && (
                                <NextImage src="/Tfdlogo.png" alt="TFD Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="TFD Esports" />
                              )}
                               {(ach.team === 'Red Saints') && (
                                <NextImage src="/RST Esports.png" alt="Red Saints" width={48} height={30} style={{ objectFit: 'contain' }} title="Red Saints" />
                              )}
                              {(ach.team === '7Sins') && (
                                <NextImage src="/7Sins-Logo.png" alt="7Sins" width={48} height={30} style={{ objectFit: 'contain' }} title="7Sins" />
                              )}
                              {(ach.team === 'DTDxEsports') && (
                                <NextImage src="/DTDxEsports Logo.png" alt="DTDxEsports" width={48} height={30} style={{ objectFit: 'contain' }} title="DTDxEsports" />
                              )}
                              {(ach.team === 'Unbeatables') && (
                                <NextImage src="/Unbeatables-logo.png" alt="Unbeatables" width={48} height={30} style={{ objectFit: 'contain' }} title="Unbeatables" />
                              )}
                              {(ach.team === 'WallStreet Bets') && (
                                <NextImage src="/WallStreet Bets Logo.jpg" alt="WallStreet Bets" width={48} height={30} style={{ objectFit: 'contain' }} title="WallStreet Bets" />
                              )}
                                {(ach.team === 'Team OP') && (
                                <NextImage src="/Team OPlogo.png" alt="Team OP" width={48} height={30} style={{ objectFit: 'contain' }} title="Team OP" />
                              )}
                              {(ach.team === 'Team Star') && (
                                <NextImage src="/Starlogo.png" alt="Team Star" width={48} height={30} style={{ objectFit: 'contain' }} title="Team Star" />
                              )}
                              {(ach.team === 'Freestyle' || ach.team === 'Free Style' || ach.team === 'FS') && (
                                <NextImage src="/freestyle-logo.jpg" alt="Freestyle" width={48} height={30} style={{ objectFit: 'contain' }} title="Freestyle" />
                              )}
                              {(ach.team === 'TOB') && (
                                <NextImage src="/TOB-esportlogo.png" alt="TOB" width={48} height={30} style={{ objectFit: 'contain' }} title="TOB" />
                              )}
                              {(ach.team === 'Ext') && (
                                <NextImage src="/Ext-logo.png" alt="Ext" width={48} height={30} style={{ objectFit: 'contain' }} title="Ext" />
                              )}
                              {(ach.team === 'H4K') && (
                                <NextImage src="/h4k-logo.png" alt="H4K" width={48} height={30} style={{ objectFit: 'contain' }} title="H4K" />
                              )}
                              {(ach.team === 'Unstoppable') && (
                                <NextImage src="/Unstoppable-logo.jpeg" alt="Unstoppable" width={48} height={30} style={{ objectFit: 'contain' }} title="Unstoppable" />
                              )}
                              {(ach.team === 'GPA') && (
                                <NextImage src="/GPA-logo.png" alt="GPA" width={48} height={30} style={{ objectFit: 'contain' }} title="GPA" />
                              )}
                               {(ach.team === 'Oxy Esports') && (
                                <NextImage src="/Oxylogo.png" alt="Oxy Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Oxy Esports" />
                              )}
                              {(ach.team === 'Mythicals') && (
                                <NextImage src="/mythicalslogo.jpg" alt="Mythicals" width={48} height={30} style={{ objectFit: 'contain' }} title="Mythicals" />
                              )}
                              {(ach.team === 'Myth Esports') && (
                                <NextImage src="/MythLogo.png" alt="Myth Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Myth Esports" />
                              )}
                              {(ach.team === 'KOD Esports') && (
                                <NextImage src="/Kodlogo.png" alt="KOD Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="KOD Esports" />
                              )}
                              {(ach.team === '4Pro Marshals') && (
                                <NextImage src="/4ProMarshalls.png" alt="4Pro Marshals" width={48} height={30} style={{ objectFit: 'contain' }} title="4Pro Marshals" />
                              )}
                              {(ach.team === 'PTG Gaming') && (
                                <NextImage src="/PTG Gaming.png" alt="PTG Gaming" width={48} height={30} style={{ objectFit: 'contain' }} title="PTG Gaming" />
                              )}
                             
                              {(ach.team === 'ATX') && (
                                <NextImage src="/atx-logo.png" alt="ATX" width={48} height={30} style={{ objectFit: 'contain' }} title="ATX" />
                              )}
                              {ach.team === '4thrives' && (
                                <NextImage src="/4thirveslogo.png" alt="4thrives" width={48} height={30} style={{ objectFit: 'contain' }} title="4Thrives" />
                              )}
                               {ach.team === 'AS Esports' && (
                                <NextImage src="/aslogo.jpg" alt="AS Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="AS Esports" />
                              )}
                               {ach.team === 'NED 99' && (
                                <NextImage src="/NED99logo.png" alt="NED 99" width={48} height={30} style={{ objectFit: 'contain' }} title="NED 99" />
                              )}
                               {ach.team === 'Flex Esports' && (
                                <NextImage src="/Flexlogo.png" alt="Flex Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Flex Esports" />
                              )}
                               {ach.team === 'Tag Esports' && (
                                <NextImage src="/Taglogo.png" alt="Tag Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Tag Esports" />
                              )}
                               {ach.team === 'R360 Esports' && (
                                <NextImage src="/r360logo.jpg" alt="R360 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="R360 Esports" />
                              )}
                               {ach.team === 'Team RPG' && (
                                <NextImage src="/rpglogo.jpg" alt="Team RPG" width={48} height={30} style={{ objectFit: 'contain' }} title="Team RPG" />
                              )}
                              {ach.team === 'Agonxi8 Esports' && (
                                <NextImage src="/i8logo.png" alt="i8 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="i8 Esports" />
                              )}
                              {(ach.team === 'Son of Anarchy' || ach.team === 'Sons of Anarchy') && (
                                <NextImage src="/SonofAnarchylogo.jpeg" alt="Son of Anarchy" width={48} height={30} style={{ objectFit: 'contain' }} title="Son of Anarchy" />
                              )}
                              {(ach.team === 'Cracked Mind' || ach.team === 'Cracked Minds') && (
                                <NextImage src="/Cmlogo.png" alt="Cracked Mind" width={48} height={30} style={{ objectFit: 'contain' }} title="Cracked Mind" />
                              )}
                               {ach.team === 'Radical Death' && (
                                <NextImage src="/RadicalDeath-Logo.jpeg" alt="Radical Death" width={48} height={30} style={{ objectFit: 'contain' }} title="404 Esports" />
                              )}
                              {ach.team === 'Trouble Makers' && (
                                <NextImage src="/troublemakerlogo.png" alt="Trouble Makers" width={48} height={30} style={{ objectFit: 'contain' }} title="Trouble Makers" />
                              )}
                               {ach.team === '404 Esports' && (
                                <NextImage src="/404logo.png" alt="404 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="404 Esports" />
                              )}
                               {(ach.team === 'Stalwart Esports' || ach.team === 'STE') && (
                                <NextImage src="/STElogo.jpg" alt="Stalwart Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Stalwart Esports" />
                              )}
                               {ach.team === 'Qwerty Esports' && (
                                <NextImage src="/T20xQwerty.png" alt="Qwerty Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Qwerty Esports" />
                              )}
                               {ach.team === 'Magnus Esports' && (
                                <NextImage src="/MgsLogo.png" alt="Magnus Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Magnus Esports" />
                              )}
                               {ach.team === 'R3D' && (
                                <NextImage src="/R3Dlogo.png" alt="R3D" width={48} height={30} style={{ objectFit: 'contain' }} title="R3D" />
                              )}
                               {ach.team === 'North Esports' && (
                                <NextImage src="/nesLogo.png" alt="North Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="North Esports" />
                              )}
                              {(ach.team === 'Jk Nation' || ach.team === 'JK Nation') && (
                                <NextImage src="/Jknationlogo.png" alt="Jk Nation" width={48} height={30} style={{ objectFit: 'contain' }} title="Jk Nation" />
                              )}
                            
                              {(ach.team === '4T') && (
                                <NextImage src="/4thirveslogo.png" alt="4T" width={48} height={30} style={{ objectFit: 'contain' }} title="4T" />
                              )}
                              {(ach.team === 'PAK') && (
                                <NextImage src="/mini-pak-flag.png" alt="PAK" width={48} height={30} style={{ objectFit: 'contain' }} title="PAK" />
                              )}
                               {(ach.team === 'Negative Minds') && (
                                <NextImage src="/Negative minds logo.jpg" alt="Negative Minds" width={48} height={30} style={{ objectFit: 'contain' }} title="Negative Minds" />
                              )}
                               {(ach.team === 'Team Seal') && (
                                <NextImage src="/teamsealLogo.jpg" alt="Team Seal" width={48} height={30} style={{ objectFit: 'contain' }} title="Team Seal" />
                              )}
                              {(ach.team === 'Vip Esports') && (
                                <NextImage src="/vipesportlogo.jpg" alt="Team Seal" width={48} height={30} style={{ objectFit: 'contain' }} title="Vip Esports" />
                              )}
                              {(ach.team === 'SR | 3x') && (
                                <NextImage src="/3xlogo.png" alt="SR | 3x" width={48} height={30} style={{ objectFit: 'contain' }} title="SR | 3x" />
                              )}
                               {(ach.team === 'Tog Esports') && (
                                <NextImage src="/toglogo.jpg" alt="Tog Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Tog Esports" />
                              )}
                               {(ach.team === 'Aminz Esports') && (
                                <NextImage src="/amzLogo.png" alt="Aminz Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Aminz Esports" />
                              )}
                               {(ach.team === 'Fyme') && (
                                <NextImage src="/fymelogo.jpg" alt="Fyme" width={48} height={30} style={{ objectFit: 'contain' }} title="Fyme" />
                              )}
                               {(ach.team === 'Raze Renegades') && (
                                <NextImage src="/RazeRenegadelogo.jpg" alt="Raze Renegades" width={48} height={30} style={{ objectFit: 'contain' }} title="Raze Renegades" />
                              )}
                              {(ach.team === 'Rage') && (
                                <NextImage src="/Rage-logo.png" alt="Rage" width={48} height={30} style={{ objectFit: 'contain' }} title="Rage" />
                              )}
                              {!['Seventh Element','Fyme','Aminz Esports','Vip Esports','Team Seal','Twsited Minds','Raze Renegades','Negative Minds','IC','R3D','i8 Esports','Saltxi8','Tog Esports','AGONxi8 Esports','Team H2E','Clarity Esports','Magnus Esports','Qwerty Esports','Team Bablu','R3G Esports','WallStreet Bets','North Esports','Stalwart Esports','STE','Team OP','3x Esports','3x','SR | 3x','R360 Esports','CNF Esports','9Eleven Esport','Hyper Esport','F4K Esports','Unix Esport','Trouble Makers','Radical Death','404 Esports','Bloodmoon','Demolition 5','Virus','KOD Esports','4Pro Marshals','Tag Esports','TFD Esports','Flex Esports','Mythicals','Myth Esports','PTG Gaming','Oxy Esports','Unique Esports','Hellraisers','Red Death','VLR Esports','AS Esports','Metershot Esports','ViperxS1','Team Star','Team RPG','Koxav Esports','NED 99','Spins Esport', 'XGeneration', 'xgenerator', 'FMA Esports', 'Destroyer Esports', '52 Esports', 'F2D Esports', 'MSxDTD', '247Esports', 'Hashtag Esports', 'Galacticous', 'Team QWERTY', '7Sins', 'DTDxEsports', 'Unbeatables', 'Freestyle', 'Free Style', 'FS', 'TOB', 'Ext', 'H4K', 'Unstoppable', 'GPA', 'ATX', '4thrives', '4T', 'IC', 'PAK', 'Rage', 'Agonxi8 Esports','Red Saints','Son of Anarchy','Sons of Anarchy','Cracked Mind','Cracked Minds','Jk Nation','JK Nation'].includes(ach.team) && (
                                <span style={{ fontSize: '0.85rem', color: ach.team === 'Flames 1' ? '#ff0000' : '#3498db', fontWeight: 700 }}>{ach.team}</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section - Corrected with Join/Leave/Team */}
              <section>
                <div style={{ 
                  background: '#1a1a1a', 
                  padding: '12px 20px', 
                  border: '1px solid #3c3c3c', 
                  borderBottom: 'none',
                  borderTopLeftRadius: '8px', 
                  borderTopRightRadius: '8px',
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{ width: '4px', height: '18px', background: '#3498db', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1rem', fontWeight: 900, color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Team History</h2>
                </div>
                
                <div style={{ 
                  border: '1px solid #3c3c3c', 
                  borderBottomLeftRadius: '8px', 
                  borderBottomRightRadius: '8px', 
                  overflow: 'hidden', 
                  background: '#1a1a1a'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
                    <thead style={{ background: 'linear-gradient(180deg, #2c2c2c 0%, #222 100%)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#ccc', fontWeight: 800 }}>
                      <tr>
                        <th style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', width: '25%', letterSpacing: '0.05em' }}>Join</th>
                        <th style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', width: '25%', letterSpacing: '0.05em' }}>Leave</th>
                        <th style={{ padding: '15px 20px', letterSpacing: '0.05em' }}>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...player.history].reverse().map((hist, idx) => (
                        <tr key={idx} style={{ borderBottom: idx === player.history.length - 1 ? 'none' : '1px solid #3c3c3c', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                          <td style={{ padding: '15px 20px', fontSize: '1.1rem', borderRight: '1px solid #3c3c3c', color: '#eee', fontWeight: 500 }}>{hist.join}</td>
                          <td style={{ padding: '15px 20px', fontSize: '1.1rem', borderRight: '1px solid #3c3c3c', color: hist.leave === 'Present' ? '#fff' : '#aaa', fontWeight: hist.leave === 'Present' ? 900 : 500 }}>{hist.leave}</td>
                          <td style={{ padding: '15px 20px', fontSize: '1.05rem', color: hist.team === 'Seventh Element' ? '#3498db' : hist.team === 'Destroyer Esports' ? '#e74c3c' : '#fff', fontWeight: 700 }}>{hist.team}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Staff / Coaching History Section */}
              {player.staffHistory && player.staffHistory.length > 0 && (
                <section>
                  <div style={{ 
                    background: '#1a1a1a', 
                    padding: '12px 20px', 
                    border: '1px solid #3c3c3c', 
                    borderBottom: 'none',
                    borderTopLeftRadius: '8px', 
                    borderTopRightRadius: '8px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ width: '4px', height: '18px', background: '#f39c12', borderRadius: '2px' }} />
                    <h2 style={{ fontSize: '1rem', fontWeight: 900, color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Staff / Coaching History</h2>
                  </div>
                  
                  <div style={{ 
                    border: '1px solid #3c3c3c', 
                    borderBottomLeftRadius: '8px', 
                    borderBottomRightRadius: '8px', 
                    overflow: 'hidden', 
                    background: '#1a1a1a'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
                      <thead style={{ background: 'linear-gradient(180deg, #2c2c2c 0%, #222 100%)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#ccc', fontWeight: 800 }}>
                        <tr>
                          <th style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', width: '20%', letterSpacing: '0.05em' }}>Join</th>
                          <th style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', width: '20%', letterSpacing: '0.05em' }}>Leave</th>
                          <th style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', width: '35%', letterSpacing: '0.05em' }}>Team</th>
                          <th style={{ padding: '15px 20px', letterSpacing: '0.05em' }}>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...player.staffHistory].reverse().map((hist, idx) => (
                          <tr key={idx} style={{ borderBottom: idx === player.staffHistory!.length - 1 ? 'none' : '1px solid #3c3c3c', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            <td style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', fontSize: '0.95rem', color: '#9CA3AF', fontWeight: 600 }}>{hist.join}</td>
                            <td style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', fontSize: '0.95rem', color: hist.leave.toLowerCase() === 'present' ? '#22C55E' : '#9CA3AF', fontWeight: hist.leave.toLowerCase() === 'present' ? 800 : 600 }}>{hist.leave}</td>
                            <td style={{ padding: '15px 20px', borderRight: '1px solid #3c3c3c', fontSize: '1rem', color: '#fff', fontWeight: 700 }}>{hist.team}</td>
                            <td style={{ padding: '15px 20px', fontSize: '0.95rem', color: '#f39c12', fontWeight: 700 }}>{hist.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

            </div>

          </div>

        </main>

        <Footer />

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .tourney-link:hover {
            color: #22C55E !important;
            text-decoration: underline;
          }
          .player-img-container:hover {
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .profile-layout {
              flex-direction: column !important;
              align-items: center !important;
            }
            .player-sidebar {
              width: 100% !important;
              max-width: 320px !important;
              position: static !important;
              margin-bottom: 2rem !important;
            }
            .content-main {
              width: 100% !important;
              min-width: unset !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
