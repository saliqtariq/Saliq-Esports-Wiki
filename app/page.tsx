'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLight, setIsLight] = useState(false);
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

  const cardClick = (el: HTMLElement) => {
    el.style.transform = 'scale(0.97)';
    setTimeout(() => {
      el.style.transform = '';
    }, 180);
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Background blobs */}
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />
      <div className="blob" style={{ width: '300px', height: '300px', top: '50%', left: '55%', background: '#22C55E', opacity: 0.07 }} />

      {/* Grid pattern overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23ffffff' stroke-opacity='0.025' stroke-width='1'/%3E%3C/svg%3E\")", pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ===== HEADER ===== */}
        <header style={{ padding: '1.75rem 2rem 0', width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>

            {/* Advanced Branding Block */}
            <div className="branding-block">
          
              <div>
                <h1 className="logo-text-v2">
                  Saliq<span className="logo-hyphen">-</span>Wiki
                </h1>
                <p className="tagline-v2">
                 The Home of Pakistan Esports
                </p>
              </div>
            </div>

            {/* Dark/light toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '4px' }}>
              <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500, letterSpacing: '0.03em', transition: 'color 0.3s' }}>
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

        {/* ===== HERO ===== */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem 3rem', width: '100%' }}>
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

            {/* Main heading */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,6vw,3.4rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1rem' }}>
              Your Ultimate<br />
              <span style={{ color: '#22C55E' }}>Esports</span> Reference
            </h2>

            <p style={{ fontSize: '0.975rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '2.75rem', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
              Stats, rosters, and tournament history for Pakistan&apos;s competitive gaming scene — all in one place.
            </p>

            {/* ===== PUBG Card ===== */}
            <div
              className="game-card"
              style={{ maxWidth: '460px', margin: '0 auto', cursor: 'pointer' }}
              onClick={(e) => {
                cardClick(e.currentTarget as HTMLElement);
                setTimeout(() => router.push('/pubg'), 150);
              }}
              tabIndex={0}
              role="button"
              aria-label="Explore PUBG Mobile Esports"
              onKeyDown={(e) => { if (e.key === 'Enter') { cardClick(e.currentTarget as HTMLElement); setTimeout(() => router.push('/pubg'), 150); } }}
            >
              {/* Top row — compact, title forced to one line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.1rem' }}>

                {/* Smaller icon ring */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(250,204,21,0.08) 100%)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                  transition: 'box-shadow 0.3s ease',
                }}>🎮</div>

                {/* Title + subtitle */}
                <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '3px', flexWrap: 'nowrap' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      whiteSpace: 'nowrap',
                    }}>
                      PUBG Mobile Esports
                    </h3>
                    <span className="badge-new" style={{ flexShrink: 0 }}>New</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0, lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Teams, players &amp; tournaments in Pakistan
                  </p>
                </div>

                {/* Arrow */}
                <div className="card-arrow" style={{ color: '#22C55E', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1rem' }} />

              {/* Stat row — compact */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '1rem' }}>

                {/* Teams */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '10px 8px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #22C55E, transparent)' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#22C55E', lineHeight: 1, marginBottom: '3px' }}>1+</div>
                  <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Teams</div>
                  <div style={{ fontSize: '9px', color: '#374151', marginTop: '3px' }}>Registered</div>
                </div>

                {/* Players */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '10px 8px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #FACC15, transparent)' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#FACC15', lineHeight: 1, marginBottom: '3px' }}>2+</div>
                  <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Players</div>
                  <div style={{ fontSize: '9px', color: '#374151', marginTop: '3px' }}>Profiled</div>
                </div>

                {/* Tournaments */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '10px 8px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.12), transparent)' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#4B5563', lineHeight: 1, marginBottom: '3px' }}>0</div>
                  <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Tournaments</div>
                  <div style={{ fontSize: '9px', color: '#374151', marginTop: '3px' }}>Coming soon</div>
                </div>

              </div>

              {/* Progress bar — compact */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '8px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Data coverage</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 5px #22C55E' }} />
                    <span style={{ fontSize: '10px', color: '#22C55E', fontWeight: 700 }}>0.2% complete</span>
                  </div>
                </div>
                <div style={{ height: '3px', borderRadius: '99px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '0.2%', background: 'linear-gradient(90deg,#22C55E,#FACC15)', borderRadius: '99px', minWidth: '4px' }} />
                </div>
                <p style={{ fontSize: '9.5px', color: '#374151', marginTop: '6px', marginBottom: 0, lineHeight: 1.4 }}>
                  🚧 Early access — data is being added actively.
                </p>
              </div>

            </div>
            {/* end card */}

            {/* ===== MORE GAMES COMING SOON — Premium ===== */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>

              {/* Divider label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', maxWidth: '400px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07))' }} />
                <span style={{
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#374151',
                }}>
                  More Games Coming Soon
                </span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(270deg, transparent, rgba(255,255,255,0.07))' }} />
              </div>

              {/* Game chips */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>

                {/* Tekken */}
                <div 
                  className="game-chip-tekken"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    background: isLight ? 'rgba(34,197,94,0.1)' : 'rgba(34,197,94,0.05)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '14px' }}>🥋</span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: isLight ? '#111827' : '#E5E7EB', letterSpacing: '0.01em' }}>Tekken</span>
                  <span style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    padding: '2px 7px',
                    borderRadius: '99px',
                    background: '#22C55E',
                    color: '#0B0F19',
                  }}>Soon</span>
                </div>

              </div>
            </div>
            {/* end coming soon */}

          </div>
        </main>

        {/* ===== FOOTER ===== */}
        <footer style={{ padding: '0 1.5rem 2.25rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '2rem' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.1rem', fontWeight: 600 }}>Contact</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a href="tel:03134490701" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  03134490701
                </a>
                <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.07)' }} />
                <a href="mailto:saliqtariq2@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  saliqtariq2@gmail.com
                </a>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.02em', fontWeight: 600 }}>
                PAKISTAN ESPORTS
              </p>
              <p style={{ fontSize: '10px', color: 'var(--text-secondary)', opacity: 0.8 }}>
                &copy; 2025 Saliq Wiki
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}