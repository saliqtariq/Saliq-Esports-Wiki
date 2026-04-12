'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PUBGPage() {
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

  return (
    <>
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

            {/* Back Button + Branding */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => router.back()}
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  color: '#22C55E',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.1)';
                }}
              >
                ← Back
              </button>

              <div className="branding-block">
                <div>
                  <h1 className="logo-text-v2">
                    PUBG<span className="logo-hyphen">-</span>Mobile
                  </h1>
                  <p className="tagline-v2">
                    Esports Details
                  </p>
                </div>
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

        {/* ===== CONTENT ===== */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

            {/* Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(250,204,21,0.1) 100%)',
              border: '2px solid rgba(34,197,94,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              margin: '0 auto 2rem',
            }}>🎮</div>

            {/* Title */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1.5rem', color: '#E5E7EB' }}>
              PUBG Mobile<br />
              <span style={{ color: '#22C55E' }}>Esports</span>
            </h2>

            {/* Description */}
            <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '450px', marginLeft: 'auto', marginRight: 'auto' }}>
              Teams, players &amp; tournaments in Pakistan
            </p>

            {/* Coming Soon Message */}
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(34, 197, 94, 0.05)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              marginBottom: '2rem',
            }}>
              <p style={{ fontSize: '1rem', color: '#22C55E', fontWeight: 600, marginBottom: '0.5rem' }}>🚀 Coming Soon</p>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                We're building something amazing! Detailed stats, rosters, and tournament information will be available soon. Check back regularly for updates.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '0.5rem' }}>👥</div>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teams</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '0.5rem' }}>🎖️</div>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Players</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '0.5rem' }}>🏆</div>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tournaments</p>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => router.back()}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22C55E',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.1)';
              }}
            >
              ← Go Back
            </button>

          </div>
        </main>

      </div>
    </>
  );
}
