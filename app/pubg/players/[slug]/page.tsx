'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

export default function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();

  const isAlphaBoy = slug === 'alphaboy';

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      <div className="dynamic-grid" />

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
          
          {/* Bio Text */}
          <div style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '4px', borderLeft: '4px solid #22C55E' }}>
            {isAlphaBoy ? (
              <p style={{ margin: 0 }}>
                Muhammad <strong>"AlphaBoy"</strong> Ali (born January 1, 2006) is a <span style={{ color: '#22C55E' }}>Pakistani</span> player who is currently playing for <span style={{ color: '#3498db' }}>Seventh Element</span>.
              </p>
            ) : (
              <p style={{ margin: 0 }}>Player Profile: {slug.toUpperCase()}</p>
            )}
          </div>

          {/* Swapped Layout: Infobox Left, Achievements Right */}
          <div className="profile-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
            
            {/* LEFT Column: Infobox / Sidebar */}
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
              
              {/* Infobox Header */}
              <div style={{ background: '#1a1a1a', padding: '12px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #3c3c3c', height: '52px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '15px', display: 'flex', alignItems: 'center' }}>
                  <NextImage src="/SeventhElement-Logo.png" alt="Logo" width={22} height={22} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>AlphaBoy</span>
              </div>

              {/* Player Pic */}
              <div style={{ width: '100%', background: '#000', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #3c3c3c' }}>
                <NextImage src="/Alphaboy-EsportPic.jpg" alt="AlphaBoy" width={280} height={350} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              {/* Player Info Details */}
              <div style={{ background: 'linear-gradient(90deg, #1a1a1a 0%, #2c2c2c 100%)', padding: '10px 10px', textAlign: 'center', borderBottom: '1px solid #3c3c3c' }}>
                <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Player Information</h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.85rem' }}>
                <tbody>
                  {[
                    { label: 'Name:', value: 'Muhammad Huzaifa Ali' },
                    { label: 'Nationality:', value: 'Pakistan' },
                    { label: 'Born:', value: 'January 1, 2006 (age 20)' },
                    { label: 'Status:', value: 'Active', color: '#22C55E' },
                    { label: 'Team:', value: 'Seventh Element', color: '#3498db' },
                  ].map((info, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#9CA3AF', width: '42%', textAlign: 'right', borderRight: '1px solid #3c3c3c', whiteSpace: 'nowrap' }}>{info.label}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 800, color: info.color || '#fff', textAlign: 'left', whiteSpace: 'nowrap' }}>{info.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RIGHT Column: Achievements Section */}
            <div className="achievements-section" style={{ flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column' }}>
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
              
              <div style={{ border: '1px solid #3c3c3c', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', overflowX: 'auto', background: '#1a1a1a', flex: 1, WebkitOverflowScrolling: 'touch' }}>
                <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
                  <thead style={{ background: '#2c2c2c', fontSize: '0.75rem', textTransform: 'uppercase', color: '#888' }}>
                    <tr>
                      <th style={{ padding: '12px 15px', borderRight: '1px solid #3c3c3c', width: '20%' }}>Date</th>
                      <th style={{ padding: '12px 15px', borderRight: '1px solid #3c3c3c', width: '15%' }}>Place</th>
                      <th style={{ padding: '12px 15px', borderRight: '1px solid #3c3c3c', width: '15%' }}>Tier</th>
                      <th style={{ padding: '12px 15px', borderRight: '1px solid #3c3c3c', width: '35%' }}>Tournament</th>
                      <th style={{ padding: '12px 15px', width: '15%' }}>Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
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
                    ].map((ach, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #3c3c3c', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                        <td style={{ padding: '14px 15px', fontSize: '0.9rem', borderRight: '1px solid #3c3c3c', color: '#eee' }}>{ach.date}</td>
                        <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                          <span style={{ display: 'inline-block', width: '60px', padding: '4px 0', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 800, background: ach.place === '1st' ? '#a08a00' : ach.place === '3rd' ? '#4d4d4d' : '#2c5f63', color: '#fff' }}>
                            {ach.place}
                          </span>
                        </td>
                        <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c', textAlign: 'center' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#a0c4ff' }}>{ach.tier}</span>
                        </td>
                        <td style={{ padding: '14px 15px', borderRight: '1px solid #3c3c3c' }}>
                          <span className="tourney-link" style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>{ach.tourney}</span>
                        </td>
                        <td style={{ padding: '14px 15px', fontSize: '0.85rem', color: '#3498db', fontWeight: 700 }}>{ach.team}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </main>

        <Footer />

        <style jsx global>{`
          .tourney-link:hover {
            color: #22C55E !important;
            text-decoration: underline;
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
            .achievements-section {
              width: 100% !important;
              min-width: unset !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
