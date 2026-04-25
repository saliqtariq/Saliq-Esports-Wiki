'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NextImage from 'next/image';
import Footer from '../../components/Footer';

interface Player {
  id: string;
  realName: string;
  team: string;
  teamLogo?: string;
  links: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}

const players: Player[] = [
  { 
    id: 'Shurta G', 
    realName: 'Saliq Tariq', 
    team: 'FMA Esports',
    teamLogo: '/fma-esports-logo.jpg',
    links: { 
      instagram: 'https://www.instagram.com/ig_shurta' 
    } 
  },
  { 
    id: 'AlphaBoy', 
    realName: 'Muhammad Huzaifa Ali', 
    team: 'Seventh Element',
    teamLogo: '/SeventhElement-Logo.png',
    links: { 
      instagram: 'https://www.instagram.com/alphaboyy.1' 
    } 
  }
];

export default function PlayersPage() {
  const [isLight, setIsLight] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const nextLight = !isLight;
    setIsLight(nextLight);
    if (nextLight) {
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      {/* Background blobs */}
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />

      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* ===== HEADER ===== */}
        <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
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
                transition: 'all 0.3s ease',
              }}
            >
              Back
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {isLight ? 'Light' : 'Dark'}
              </span>
              <button className="toggle-track" onClick={toggleTheme} aria-label="Toggle light/dark mode">
                <div className="toggle-thumb">
                  <span>{isLight ? '☀️' : '🌙'}</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main style={{ flex: 1, padding: '1rem 1rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
            
            {/* Centered Large Title */}
            <div style={{ margin: '2rem 0 4rem' }}>
              <h1 className="mobile-title-clamp" style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                margin: 0,
                textTransform: 'uppercase'
              }}>
                Player Portal
              </h1>
              <h2 className="mobile-title-clamp" style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: '#22C55E',
                margin: '0.25rem 0 0 0',
                textTransform: 'uppercase'
              }}>
                Pakistan
              </h2>
            </div>

            {/* Wiki Style Table Section */}
            <div style={{ marginTop: '1rem', textAlign: 'left', width: '100%' }}>
              <div style={{ 
                border: '1px solid #3c3c3c', 
                background: '#202020',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                {/* Wiki Header Row */}
                <div style={{ 
                  background: '#2c2c2c', 
                  padding: '10px 12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderBottom: '1px solid #3c3c3c',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                    <NextImage 
                      src="/mini-pak-flag.png" 
                      alt="PK" 
                      width={18} 
                      height={13} 
                      style={{ objectFit: 'contain' }}
                    />
                    Players
                  </div>
                  <button 
                    onClick={() => setIsHidden(!isHidden)}
                    style={{ 
                      position: 'absolute',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid #555', 
                      borderRadius: '4px', 
                      padding: '4px 12px', 
                      fontSize: '0.75rem', 
                      color: '#fff', 
                      cursor: 'pointer',
                      fontWeight: 700
                    }}
                  >
                    {isHidden ? 'Show' : 'Hide'}
                  </button>
                </div>

                {!isHidden && (
                  <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                    <table style={{ width: '100%', minWidth: '500px', borderCollapse: 'collapse', textAlign: 'left', color: '#fff', fontSize: '1.15rem' }}>
                      <thead>
                        <tr style={{ background: '#1a1a1a', borderBottom: '1px solid #3c3c3c' }}>
                          <th className="mobile-table-header" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c', width: '25%' }}>ID</th>
                          <th className="mobile-table-header" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c', width: '35%' }}>Real Name</th>
                          <th className="mobile-table-header" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c', width: '30%' }}>Team</th>
                          <th className="mobile-table-header" style={{ padding: '10px 15px', width: '10%' }}>Links</th>
                        </tr>
                      </thead>
                      <tbody>
                        {players.map((player) => (
                          <tr key={player.id} style={{ borderBottom: '1px solid #3c3c3c' }}>
                            <td className="mobile-table-cell" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <NextImage 
                                  src="/mini-pak-flag.png" 
                                  alt="PK" 
                                  width={14} 
                                  height={10} 
                                  style={{ objectFit: 'contain' }}
                                />
                                <Link 
                                  href={`/pubg/players/${player.id.toLowerCase().replace(/\s+/g, '-')}`}
                                  style={{ 
                                    color: '#22C55E', 
                                    fontWeight: 700, 
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  {player.id}
                                </Link>
                              </div>
                            </td>
                            <td className="mobile-table-cell" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c', whiteSpace: 'nowrap' }}>
                              {player.realName}
                            </td>
                            <td className="mobile-table-cell" style={{ padding: '10px 15px', borderRight: '1px solid #3c3c3c', color: player.team ? '#22C55E' : '#fff', whiteSpace: 'nowrap' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {player.teamLogo && (
                                  <NextImage 
                                    src={player.teamLogo} 
                                    alt={player.team} 
                                    width={16} 
                                    height={16} 
                                    style={{ borderRadius: '4px', objectFit: 'contain' }}
                                  />
                                )}
                                {player.team}
                              </div>
                            </td>
                            <td className="mobile-table-cell" style={{ padding: '10px 15px' }}>
                              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
                                {player.links.instagram && (
                                  <a href={player.links.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ 
                                      background: '#000', 
                                      borderRadius: '4px', 
                                      width: '18px', 
                                      height: '18px', 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center',
                                      overflow: 'hidden'
                                    }}>
                                      <NextImage 
                                        src="/instagram-logo.jpeg" 
                                        alt="Instagram" 
                                        width={14} 
                                        height={14} 
                                        style={{ objectFit: 'contain' }}
                                      />
                                    </div>
                                  </a>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
