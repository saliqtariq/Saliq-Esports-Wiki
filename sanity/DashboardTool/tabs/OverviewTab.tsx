import React from 'react';
import { UserIcon, TrophyIcon, ChevronRightIcon, CalendarIcon } from '../components/Icons';

interface OverviewTabProps {
  playerCount: number;
  tournamentCount: number;
  loading: boolean;
}

export const OverviewTab = ({ playerCount, tournamentCount, loading }: OverviewTabProps) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Total Players - LIVE */}
        <div style={{
          backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '12px', padding: '20px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,255,136,0.03), transparent)' }}></div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#9ca3af', fontSize: '14px' }}>
                <div style={{ padding: '6px', backgroundColor: 'rgba(0,255,136,0.1)', color: '#00FF88', borderRadius: '6px', display: 'flex' }}><UserIcon /></div>
                Total Players
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FF88',
                  boxShadow: '0 0 6px #00FF88', marginLeft: '4px',
                }}></div>
              </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '8px' }}>
                {loading ? '...' : playerCount.toLocaleString()}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>↗ Live</span>
                <span style={{ color: '#6b7280' }}>CMS + Static</span>
              </div>
            </div>
            <div style={{ width: '64px', height: '32px', opacity: 0.7 }}>
              <svg viewBox="0 0 100 40" style={{ width: '100%', height: '100%', stroke: '#00FF88' }} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0,30 L20,25 L40,35 L60,15 L80,20 L100,5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tournaments - LIVE */}
        <div style={{
          backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '12px', padding: '20px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,255,136,0.03), transparent)' }}></div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#9ca3af', fontSize: '14px' }}>
                <div style={{ padding: '6px', backgroundColor: 'rgba(0,255,136,0.1)', color: '#00FF88', borderRadius: '6px', display: 'flex' }}><TrophyIcon /></div>
                Tournaments
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FF88',
                  boxShadow: '0 0 6px #00FF88', marginLeft: '4px',
                }}></div>
              </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '8px' }}>
                {loading ? '...' : tournamentCount.toLocaleString()}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>↗ Live</span>
                <span style={{ color: '#6b7280' }}>auto-updating</span>
              </div>
            </div>
            <div style={{ width: '64px', height: '32px', opacity: 0.7 }}>
              <svg viewBox="0 0 100 40" style={{ width: '100%', height: '100%', stroke: '#00FF88' }} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0,35 L20,30 L40,20 L60,25 L80,10 L100,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Player Growth Area Chart */}
        <div style={{ backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px', fontWeight: 600 }}>
              <UserIcon /> Player Growth
            </div>
            <div style={{
              fontSize: '12px', backgroundColor: '#020305', border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center',
              gap: '4px', cursor: 'pointer', color: '#d1d5db',
            }}>
              Last 6 Months <ChevronRightIcon />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '24px' }}>
            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
              {loading ? '...' : playerCount.toLocaleString()} <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#6b7280' }}>Total Players</span>
            </div>
            <div style={{ color: '#00FF88', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>↗ Live</div>
          </div>
          <div style={{ height: '192px', width: '100%', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none', paddingBottom: '24px', fontSize: '10px', color: '#4b5563' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>15K</div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>12K</div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>9K</div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>6K</div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>3K</div>
              <div>0</div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: '32px', right: 0, display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6b7280', paddingTop: '8px' }}>
              <span>Dec '24</span><span>Jan '25</span><span>Feb '25</span><span>Mar '25</span><span>Apr '25</span><span>May '25</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, left: '32px', marginBottom: '24px' }}>
              <svg style={{ width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00FF88" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q20,75 40,65 T80,45 T100,20 L100,100 L0,100 Z" fill="url(#areaGrad)" />
                <path d="M0,80 Q20,75 40,65 T80,45 T100,20" fill="none" stroke="#00FF88" strokeWidth="2.5" />
                <circle cx="65" cy="52" r="3" fill="#00FF88" />
              </svg>
              <div style={{
                position: 'absolute', top: '20%', left: '55%',
                backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px', borderRadius: '6px', fontSize: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}>
                <div style={{ color: '#9ca3af' }}>Latest</div>
                <div style={{ fontWeight: 'bold', color: 'white' }}>{loading ? '...' : `${playerCount.toLocaleString()} Players`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Tournaments */}
        <div style={{ backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px', fontWeight: 600 }}>
              <CalendarIcon /> Upcoming Tournaments
            </div>
            <span style={{ fontSize: '10px', color: '#9ca3af', cursor: 'pointer' }}>View All</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              padding: '32px', textAlign: 'center', color: '#6b7280', fontSize: '14px',
              border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', width: '100%',
              display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center'
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px'
              }}>
                <TrophyIcon />
              </div>
              <div style={{ fontWeight: 'bold', color: '#9ca3af' }}>Coming Soon</div>
              <div style={{ fontSize: '12px' }}>Tournament tracking is currently under development.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
