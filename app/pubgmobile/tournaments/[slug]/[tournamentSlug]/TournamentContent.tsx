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

  const tabs: Tab[] = ['Overview', 'Standings', 'Prize Pool', 'Rules'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div style={{ padding: '2rem', background: 'rgba(15, 23, 42, 0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ color: '#22C55E', marginBottom: '1rem' }}>Tournament Overview</h2>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Status</p>
                <p style={{ color: '#FFF', fontWeight: 600 }}>{tournament.status}</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Format</p>
                <p style={{ color: '#FFF', fontWeight: 600 }}>{tournament.format}</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
                <p style={{ color: '#9CA3AF', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Start Date</p>
                <p style={{ color: '#FFF', fontWeight: 600 }}>{tournament.startDate}</p>
              </div>
            </div>
          </div>
        );
      case 'Standings':
        return (
          <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(15, 23, 42, 0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
            <h2 style={{ color: '#FFF', marginBottom: '0.5rem' }}>Standings Not Available</h2>
            <p style={{ color: '#9CA3AF' }}>The tournament standings will be updated once the matches begin.</p>
          </div>
        );
      case 'Prize Pool':
        return (
          <div style={{ padding: '2rem', background: 'rgba(15, 23, 42, 0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ color: '#FACC15', marginBottom: '1.5rem' }}>Prize Distribution</h2>
            <div style={{ padding: '2rem', background: 'rgba(250, 204, 21, 0.05)', borderRadius: '16px', border: '1px solid rgba(250, 204, 21, 0.2)', textAlign: 'center' }}>
              <p style={{ color: '#FACC15', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Total Prize Pool</p>
              <h3 style={{ color: '#FFF', fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>{tournament.prizePool}</h3>
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

      <main style={{ marginTop: '0.5rem' }}>
        {renderContent()}
      </main>
    </div>
  );
}
