'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';

const maps = [
  { title: 'Erangel', slug: 'erangel', image: '/maps/erangel.png' },
  { title: 'Miramar', slug: 'miramar', image: '/maps/miramar.png' },
  { title: 'Sanhok', slug: 'sanhok', image: '/maps/sanhok.png' },
  { title: 'Vikendi', slug: 'vikendi', image: '/maps/vikendi.png' },
  { title: 'Karakin', slug: 'karakin', image: '/maps/karakin.png' },
  { title: 'Livik', slug: 'livik', image: '/maps/livik.png' },
  { title: 'Rondo', slug: 'rondo', image: '/maps/erangel.png' }, // Placeholder image
];

export default function MapsPage() {
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
      {/* Background blobs */}
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />
      <div className="blob" style={{ width: '300px', height: '300px', top: '50%', left: '55%', background: '#22C55E', opacity: 0.07 }} />

      {/* Grid pattern overlay */}
      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* ===== HEADER ===== */}
        <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button
                onClick={() => router.push('/pubg')}
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '10px',
                  padding: '9px 16px',
                  cursor: 'pointer',
                  color: '#22C55E',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.15)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.1)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.2)';
                }}
              >
                Back
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isLight ? 'Light' : 'Dark'}
              </span>
              <button className="toggle-track" onClick={toggleTheme} aria-label="Toggle light/dark mode">
                <div className="toggle-thumb">
                  <span>{isLight ? '\u2600' : '\u263D'}</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem 4rem' }}>
          <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 800, 
              letterSpacing: '-0.035em', 
              lineHeight: 1.08, 
              marginBottom: '3rem', 
              color: 'var(--text-primary)' 
            }}>
              PUBG Mobile
              <br />
              <span style={{ color: '#22C55E' }}>Maps</span>
            </h2>

            {/* Maps Grid (Using Flex for centering 7th map) */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '4rem',
              width: '100%'
            }}>
              {maps.map((map) => (
                <div 
                  key={map.slug}
                  className="module-card-v5"
                  style={{ 
                    height: '180px', 
                    position: 'relative',
                    flex: '1 1 280px',
                    maxWidth: '310px',
                    minWidth: '260px',
                    borderRadius: '16px'
                  }}
                  onClick={() => router.push(`/pubg/maps/${map.slug}`)}
                >
                  <div className="card-image-wrapper-v5" style={{ height: '100%', position: 'relative' }}>
                    <img 
                      src={map.image} 
                      alt={map.title} 
                      className="module-image-v5"
                      style={{ opacity: 0.85 }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingBottom: '1.25rem'
                    }}>
                      <h3 style={{ 
                        color: '#FFFFFF', 
                        fontFamily: 'var(--font-syne), var(--font-display)', 
                        fontSize: '1.35rem', 
                        fontWeight: 800,
                        margin: 0,
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 8px rgba(0,0,0,0.5)'
                      }}>
                        {map.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push('/pubg')}
              style={{
                padding: '0.85rem 1.75rem',
                borderRadius: '12px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                color: '#22C55E',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.15)';
                (e.target as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(34, 197, 94, 0.1)';
                (e.target as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.25)';
              }}
            >
              Go Back
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
