'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';

export default function PlayersPage() {
  const [isLight, setIsLight] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const nextLight = !isLight;
    setIsLight(nextLight);

    requestAnimationFrame(() => {
      if (nextLight) {
        document.documentElement.classList.add('light');
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    });
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      {/* Background blobs - hidden on mobile for performance */}
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
        <main style={{ flex: 1, padding: '1rem 2rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
            
            {/* Centered Large Title */}
            <div style={{ margin: '2rem 0 6rem' }}>
              <h1 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--text-primary)',
                margin: 0,
                textTransform: 'uppercase'
              }}>
                Player Portal
              </h1>
              <h2 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#22C55E',
                margin: '0.25rem 0 0 0',
                textTransform: 'uppercase'
              }}>
                Pakistan
              </h2>
            </div>

            {/* Players Heading Section - ENHANCED */}
            <div style={{ marginTop: '2rem', textAlign: 'left', width: '100%' }}>
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: 'var(--text-primary)',
                  margin: '0 0 0.75rem 0',
                  letterSpacing: '-0.03em',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Players
                </h3>
                {/* Subtle glow behind title */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20px', 
                  left: '-10px', 
                  width: '60px', 
                  height: '20px', 
                  background: '#22C55E', 
                  filter: 'blur(25px)', 
                  opacity: 0.3,
                  zIndex: 1 
                }} />
                
                {/* Gradient line moved below */}
                <div style={{ 
                  height: '4px', 
                  width: '100%', 
                  background: 'linear-gradient(90deg, #22C55E 0%, rgba(34, 197, 94, 0.05) 100%)',
                  borderRadius: '2px',
                  opacity: 0.8
                }} />
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
