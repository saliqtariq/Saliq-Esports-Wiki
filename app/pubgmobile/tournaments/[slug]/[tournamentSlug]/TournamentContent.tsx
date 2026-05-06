'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import TournamentRules from './TournamentRules';

type Tab = 'Overview' | 'Standings' | 'Prize Pool' | 'Rules';

interface TournamentContentProps {
  tournament: any;
  organization: any;
  isDailyBattle: boolean;
}

export default function TournamentContent({ tournament, organization, isDailyBattle }: TournamentContentProps) {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [standingTab, setStandingTab] = useState<'Play-Offs' | 'Grand Finals'>('Play-Offs');

  const tabs: Tab[] = ['Overview', 'Standings', 'Prize Pool', 'Rules'];

  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #22C55E 0%, #16a34a 100%);
      border-radius: 10px;
      border: 2px solid rgba(15, 23, 42, 0.5);
      box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #4ade80 0%, #22C55E 100%);
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
    }
  `;

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        const isInviteOnly = tournament.status.toLowerCase().includes('invitational') || tournament.format.toLowerCase().includes('invitational');

        return (
          <div style={{ padding: '1.5rem', background: 'rgba(15, 23, 42, 0.2)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ color: '#22C55E', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tournament Information
            </h2>

            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '2rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Current Status</p>
                <p style={{ color: '#FFF', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{tournament.status}</p>
              </div>
              <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Competition Format</p>
                <p style={{ color: '#FFF', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{tournament.format}</p>
              </div>
              <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Start Date</p>
                <p style={{ color: '#FFF', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{tournament.startDate}</p>
              </div>
              <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Prize Pool</p>
                <p style={{ color: '#22C55E', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>{tournament.prizePool}</p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              {isInviteOnly ? (
                <div style={{
                  padding: '1.2rem',
                  background: 'rgba(234, 179, 8, 0.05)',
                  border: '2px solid rgba(234, 179, 8, 0.3)',
                  borderRadius: '16px',
                  display: 'inline-block',
                  width: '100%'
                }}>
                  <p style={{ color: '#FACC15', fontWeight: 900, fontSize: '1.2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.15em', fontStyle: 'italic' }}>
                    ⚠️ INVITATION TEAMS ONLY
                  </p>
                </div>
              ) : (
                <button 
                  onClick={() => {
                    if (organization.slug === '7sins') {
                      const message = `Hello, I would like to register for ${tournament.name}`;
                      window.open(`https://wa.me/923358746804?text=${encodeURIComponent(message)}`, '_blank');
                    }
                  }}
                  style={{
                  width: '100%',
                  padding: '1.2rem',
                  background: 'linear-gradient(90deg, #22C55E 0%, #16a34a 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(34, 197, 94, 0.2)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34, 197, 94, 0.3)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.2)'; }}
                >
                  REGISTER YOUR TEAM
                </button>
              )}
            </div>
          </div>
        );
      case 'Standings':
        const isPMTM = tournament.name.includes('PMTM');
        const isDaily = tournament.name.toLowerCase().includes('daily');
        const standingTabs = isPMTM
          ? ['Play-Offs', 'Grand Finals']
          : isDaily
            ? ['Finals']
            : ['Qualifiers', 'Quarter Finals', 'Semi Finals', 'Grand Finals'];

        const currentStandingTab = standingTabs.includes(standingTab as any) ? standingTab : standingTabs[0];

        const playOffsData = isPMTM && currentStandingTab === 'Play-Offs' ? [
          { rank: 1, team: 'MAXEBELS', wwcd: 1, pp: 24, ep: 54, tp: 78 },
          { rank: 2, team: '4 THRIVES', wwcd: 1, pp: 19, ep: 53, tp: 72 },
          { rank: 3, team: 'LOYALITY FIRST', wwcd: 1, pp: 20, ep: 47, tp: 67 },
          { rank: 4, team: 'HORAA', wwcd: 2, pp: 20, ep: 40, tp: 60 },
          { rank: 5, team: 'GLACTIC SPIRIT', wwcd: 0, pp: 15, ep: 30, tp: 45 },
          { rank: 6, team: 'T2K', wwcd: 1, pp: 15, ep: 29, tp: 44 },
          { rank: 7, team: 'CMF', wwcd: 0, pp: 14, ep: 28, tp: 42 },
          { rank: 8, team: '313', wwcd: 0, pp: 15, ep: 25, tp: 40 },
          { rank: 9, team: 'ABRUPT SLAYERS', wwcd: 0, pp: 9, ep: 31, tp: 40 },
          { rank: 10, team: 'AS I8', wwcd: 0, pp: 12, ep: 26, tp: 38 },
          { rank: 11, team: 'XG KOXAV', wwcd: 0, pp: 6, ep: 24, tp: 30 },
          { rank: 12, team: 'XOTIC', wwcd: 0, pp: 6, ep: 24, tp: 30 },
          { rank: 13, team: 'ZGSM', wwcd: 0, pp: 5, ep: 20, tp: 25 },
          { rank: 14, team: 'DRS', wwcd: 0, pp: 1, ep: 22, tp: 23 },
          { rank: 15, team: 'FMA X RST', wwcd: 0, pp: 8, ep: 10, tp: 18 },
          { rank: 16, team: 'A1 RG', wwcd: 0, pp: 0, ep: 18, tp: 18 },
          { rank: 17, team: 'ALTER EGO', wwcd: 0, pp: 0, ep: 12, tp: 12 },
          { rank: 18, team: '7E', wwcd: 0, pp: 3, ep: 8, tp: 11 },
        ] : [];

        return (
          <div style={{ padding: '0 1.5rem 1.5rem', background: 'rgba(15, 23, 42, 0.2)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '0.25rem', borderRadius: '10px', width: 'fit-content', overflowX: 'auto', whiteSpace: 'nowrap', maxWidth: '100%' }}>
              {standingTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStandingTab(tab as any)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: currentStandingTab === tab ? '#22C55E' : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    color: currentStandingTab === tab ? '#000' : 'rgba(255,255,255,0.6)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {playOffsData.length > 0 ? (
              <div className="standings-table-wrapper" style={{ overflowX: 'auto', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <table className="standings-table" style={{ minWidth: '600px', width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(34, 197, 94, 0.1)', borderBottom: '1px solid rgba(34, 197, 94, 0.2)' }}>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'left', color: '#22C55E', fontWeight: 800 }}>RANK</th>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'left', color: '#22C55E', fontWeight: 800 }}>TEAM</th>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'center', color: '#22C55E', fontWeight: 800 }}>WWCD</th>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'center', color: '#22C55E', fontWeight: 800 }}>PP</th>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'center', color: '#22C55E', fontWeight: 800 }}>EP</th>
                      <th className="standings-th" style={{ padding: '1rem', textAlign: 'center', color: '#22C55E', fontWeight: 800 }}>TP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playOffsData.map((row) => (
                      <tr key={row.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s' }} className="standing-row">
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', fontWeight: 700, color: row.rank <= 3 ? '#FACC15' : '#9CA3AF' }}>#{row.rank}</td>
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', fontWeight: 600, color: '#FFF' }}>{row.team}</td>
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', textAlign: 'center' }}>
                          {Array.from({ length: row.wwcd }).map((_, i) => (
                            <span key={i} title="Chicken Dinner" style={{ fontSize: '1rem', marginRight: '2px' }}>🍗</span>
                          ))}
                        </td>
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#E5E7EB' }}>{row.pp}</td>
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#E5E7EB' }}>{row.ep}</td>
                        <td className="standings-td" style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#22C55E', fontWeight: 800 }}>{row.tp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <style dangerouslySetInnerHTML={{
                  __html: `
                  .standing-row:hover { background: rgba(34, 197, 94, 0.05); }
                  @media (max-width: 768px) {
                    .standings-table-wrapper {
                      overflow-x: hidden;
                    }
                    .standings-table {
                      width: 100% !important;
                      min-width: 0 !important;
                      table-layout: fixed;
                    }
                    .standings-th,
                    .standings-td {
                      padding: 0.65rem 0.35rem !important;
                      font-size: 0.72rem !important;
                    }
                    .standings-table th:nth-child(1),
                    .standings-table td:nth-child(1) {
                      width: 14%;
                      white-space: nowrap;
                    }
                    .standings-table th:nth-child(2),
                    .standings-table td:nth-child(2) {
                      width: 34%;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                    .standings-table th:nth-child(3),
                    .standings-table td:nth-child(3),
                    .standings-table th:nth-child(4),
                    .standings-table td:nth-child(4),
                    .standings-table th:nth-child(5),
                    .standings-table td:nth-child(5),
                    .standings-table th:nth-child(6),
                    .standings-table td:nth-child(6) {
                      width: 13%;
                      white-space: nowrap;
                    }
                  }
                `}} />
              </div>
            ) : (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(0,0,0,0.15)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>📊</div>
                <h3 style={{ color: '#FFF', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{currentStandingTab} Standings</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto' }}>
                  The {currentStandingTab.toLowerCase()} standings are currently being prepared and will be updated soon.
                </p>
              </div>
            )}
          </div>
        );
      case 'Prize Pool':
        const isPMTM_Prize = tournament.name.includes('PMTM');
        const isIHS_Clash = tournament.name.includes('IHS CLASH S1');
        
        const prizes = isPMTM_Prize ? [
          { rank: '#1', amount: '$300' },
          { rank: '#2', amount: '$200' },
          { rank: '#3', amount: '$150' },
          { rank: '#4', amount: '$120' },
          { rank: '#5', amount: '$100' },
          { rank: '#6', amount: '$80' },
        ] : isIHS_Clash ? [
          { rank: '1ST', amount: '16,000 PKR' },
          { rank: '2ND', amount: '12,000 PKR' },
          { rank: '3RD', amount: '8,000 PKR' },
          { rank: '4TH', amount: '5,000 PKR' },
          { rank: '5TH', amount: '5,000 PKR' },
          { rank: '6TH', amount: '3,000 PKR' },
          { rank: '7TH', amount: '3,000 PKR' },
          { rank: '8TH', amount: '3,000 PKR' },
        ] : tournament.name.includes('IHS CLASH S2') ? [
          { rank: '1ST', amount: '25,000 PKR' },
          { rank: '2ND', amount: '12,000 PKR' },
          { rank: '3RD', amount: '10,000 PKR' },
          { rank: '4TH', amount: '8,000 PKR' },
          { rank: '5TH', amount: '8,000 PKR' },
          { rank: '6TH', amount: '4,000 PKR' },
          { rank: '7TH', amount: '4,000 PKR' },
          { rank: '8TH', amount: '4,000 PKR' },
        ] : [];

        const isIHS = tournament.name.includes('IHS');

        return (
          <div style={{ padding: '1.5rem 1.25rem', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflowX: 'auto' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <p style={{ color: '#22C55E', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Tournament Rewards</p>
                <h2 style={{ color: '#FFF', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', margin: 0, fontStyle: 'italic', textShadow: '0 4px 15px rgba(0,0,0,0.6)', lineHeight: 0.9 }}>
                  Prizepool <br /> <span style={{ color: '#22C55E' }}>Distribution</span>
                </h2>
              </div>

              {prizes.length > 0 ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginBottom: '1rem', maxWidth: '500px', margin: '0 auto 1.25rem' }}>
                    {prizes.map((p, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'stretch', height: '38px', background: 'rgba(0,0,0,0.4)', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
                        <div style={{ width: '55px', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 900, fontSize: '0.8rem', transform: 'skewX(-15deg)', marginLeft: '-6px', paddingLeft: '6px' }}>
                          <span style={{ transform: 'skewX(15deg)' }}>{p.rank}</span>
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.02em' }}>
                          {p.amount}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'stretch', height: '44px', background: 'rgba(34, 197, 94, 0.05)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(34, 197, 94, 0.2)', maxWidth: '300px', margin: '0 auto' }}>
                    <div style={{ padding: '0 1.2rem', background: 'linear-gradient(90deg, #22C55E 0%, #16a34a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      {isIHS ? 'PER CHICKEN' : 'MVP'}
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', fontSize: '1.2rem', fontWeight: 900, letterSpacing: '0.05em' }}>
                      {isIHS ? '500 PKR' : '$50'}
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '500px', margin: '0 auto 1rem' }}>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Specific distribution details will be announced shortly.</p>
                </div>
              )}

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '1rem 2rem', background: 'rgba(34, 197, 94, 0.03)', borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.1)' }}>
                  <p style={{ margin: 0, color: '#9CA3AF', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' }}>Total Prize Pool</p>
                  <p style={{ margin: 0, color: '#FFF', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 1 }}>
                    {tournament.prizePool}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Rules':
        return <TournamentRules />;
    }
  };

  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <div
        style={{
          border: '1px solid rgba(34, 197, 94, 0.22)',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'rgba(15, 23, 42, 0.24)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <section
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ width: '150px', position: 'relative', minHeight: '120px' }}>
            <NextImage src={tournament.logo ?? organization.logo} alt={tournament.name} fill sizes="150px" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.3rem' }}>
            <p style={{ margin: 0, color: '#22C55E', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tournament Details
            </p>
            <h1 style={{ margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', lineHeight: 1.1, fontWeight: 800 }}>
              {tournament.name}
            </h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Organized by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{organization.name}</span>
            </p>
          </div>
        </section>

        <nav style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          padding: '0.8rem 1.2rem',
          background: 'rgba(0, 0, 0, 0.15)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: isActive ? 'rgba(34, 197, 94, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid transparent',
                  borderRadius: '10px',
                  padding: '0.6rem 1.25rem',
                  color: isActive ? '#22C55E' : 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      <main style={{ marginTop: '0' }}>
        <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
        {renderContent()}
      </main>
    </div>
  );
}
