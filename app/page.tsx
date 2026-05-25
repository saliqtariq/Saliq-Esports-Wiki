'use client';

import { useRouter } from 'next/navigation';
import Footer from './components/Footer';
import PageShell from './components/PageShell';
import ThemeToggle from './components/ThemeToggle';
import StatCard from './components/StatCard';
import { useTheme } from './components/ThemeProvider';

export default function Home() {
  const { isLight } = useTheme();
  const router = useRouter();

  const cardClick = (el: HTMLElement) => {
    el.style.transform = 'scale(0.97)';
    setTimeout(() => {
      el.style.transform = '';
    }, 180);
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: 'var(--bg-primary)' }}>
      <PageShell>

        {/* ===== HEADER ===== */}
        <header style={{ padding: '1.75rem 2rem 0', width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>

            {/* Advanced Branding Block */}
            <div className="branding-block">

              <div>
                <h1 className="logo-text-v2">
                  SALIK
                </h1>
                <p className="tagline-v2">
                  The Home of Pakistan Esports
                </p>
              </div>
            </div>

            {/* Dark/light toggle */}
            <div style={{ paddingTop: '4px' }}>
              <ThemeToggle />
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


            {/* ===== PUBG Card ===== */}
            <div
              className="game-card"
              style={{ maxWidth: '460px', margin: '0 auto', cursor: 'pointer' }}
              onClick={(e) => {
                cardClick(e.currentTarget as HTMLElement);
                setTimeout(() => router.push('/pubgmobile'), 150);
              }}
              tabIndex={0}
              role="button"
              aria-label="Explore PUBG Mobile Esports"
              onKeyDown={(e) => { if (e.key === 'Enter') { cardClick(e.currentTarget as HTMLElement); setTimeout(() => router.push('/pubgmobile'), 150); } }}
            >
              {/* Top row — compact, title forced to one line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

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
                  overflow: 'hidden',
                }}>
                  <img
                    src="/kraftonfixed-logo.png"
                    alt="Krafton Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', transform: 'scale(2.40)', background: '#000' }}
                  />
                </div>

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
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1rem', marginTop: '1rem' }} />

              {/* Stat row — compact */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
                <StatCard value="1+" label="Teams" sublabel="Registered" accentColor="#22C55E" />
                <StatCard value="5" label="Players" sublabel="Profiled" accentColor="#FACC15" />
                <StatCard value="0" label="Tournaments" sublabel="Coming soon" accentColor="var(--text-primary)" />
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

        <Footer />
      </PageShell>
    </div>
  );
}

