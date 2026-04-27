'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

type Achievement = {
  date: string;
  place: string;
  tier: string;
  tourney: string;
  team: string;
};

type HistoryEntry = {
  join: string;
  leave: string;
  team: string;
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
  'shurta-g': {
    name: 'Saliq Tariq',
    nick: 'Shurta G',
    image: '/ShurtaG-Esport Pic.jpg',
    teamLogo: '/Des-Logo.jpg',
    teamName: 'Destroyer Esports',
    nationality: 'Pakistan',
    born: 'August 17, 2005 (age 20)',
    status: 'Not-Active',
    statusColor: '#e74c3c',
    bio: (
      <p style={{ margin: 0 }}>
        Saliq <strong style={{ color: '#fff' }}>"Shurta G"</strong> Tariq (born August 17, 2005) is a <span style={{ color: '#e74c3c', fontWeight: 600 }}>Not-Active</span> <span style={{ color: '#fff', fontWeight: 600 }}>Pakistani</span> player who last played for <span style={{ color: '#e74c3c', fontWeight: 600 }}>Destroyer Esports</span>.
      </p>
    ),
    achievements: [
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
  }
};

export default function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const player = PLAYERS_DATA[slug.toLowerCase()];

  if (!player) {
    return (
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Player Not Found</h1>
          <button onClick={() => router.back()} style={{ color: '#22C55E', cursor: 'pointer', background: 'none', border: '1px solid #22C55E', padding: '10px 20px', borderRadius: '8px', marginTop: '20px' }}>Go Back</button>
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
          <button
            onClick={() => router.back()}
            style={{
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1.5px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              padding: '10px 20px',
              cursor: 'pointer',
              color: '#22C55E',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            &larr; Back
          </button>
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
                    { label: 'Team:', value: player.teamName, color: player.teamName === 'Seventh Element' ? '#3498db' : player.teamName === 'Destroyer Esports' ? '#e74c3c' : '#fff' },
                  ].map((info, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#9CA3AF', width: '42%', textAlign: 'right', borderRight: '1px solid #3c3c3c', whiteSpace: 'nowrap' }}>{info.label}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 800, color: info.color || '#fff', textAlign: 'left', whiteSpace: 'nowrap' }}>{info.value}</td>
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
                      {player.achievements.map((ach, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #3c3c3c', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                          <td style={{ padding: '14px 15px', fontSize: '1.1rem', borderRight: '1px solid #3c3c3c', color: '#eee', fontWeight: 500 }}>{ach.date}</td>
                          <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                            <span style={{ display: 'inline-block', width: '60px', padding: '4px 0', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 800, background: (ach.place === '1st' || ach.place === '3rd') ? '#a08a00' : ach.place === '5th' ? '#8B4513' : '#2c5f63', color: '#fff' }}>
                              {ach.place}
                            </span>
                          </td>
                          <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: '#a0c4ff' }}>{ach.tier}</span>
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
                              {(ach.team === 'FMA Esports') && (
                                <NextImage src="/fma-esports-logo.jpg" alt="FMA Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="FMA Esports" />
                              )}
                              {(ach.team === 'Destroyer Esports') && (
                                <NextImage src="/Des-Logo.jpg" alt="Destroyer Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="Destroyer Esports" />
                              )}
                              {(ach.team === '52 Esports') && (
                                <NextImage src="/52-Esport Logo.png" alt="52 Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="52 Esports" />
                              )}
                              {(ach.team === 'F2D Esports') && (
                                <NextImage src="/F2D-EsportLogo.jpg" alt="F2D Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="F2D Esports" />
                              )}
                              {(ach.team === 'MSxDTD') && (
                                <NextImage src="/Metershotxlogo.png" alt="MSxDTD" width={48} height={30} style={{ objectFit: 'contain' }} title="MSxDTD" />
                              )}
                              {(ach.team === '247Esports') && (
                                <NextImage src="/247Esp-Logo.png" alt="247Esports" width={48} height={30} style={{ objectFit: 'contain' }} title="247Esports" />
                              )}
                              {ach.team === 'Flames 1' && (
                                <span style={{ fontSize: '0.85rem', color: '#ff0000', fontWeight: 700 }}>Flames 1</span>
                              )}
                              {!['Seventh Element', 'Koxav Esports', 'XGeneration', 'xgenerator', 'FMA Esports', 'Destroyer Esports', '52 Esports', 'F2D Esports', 'MSxDTD', '247Esports', 'Flames 1'].includes(ach.team) && (
                                <span style={{ fontSize: '0.85rem', color: '#3498db', fontWeight: 700 }}>{ach.team}</span>
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
