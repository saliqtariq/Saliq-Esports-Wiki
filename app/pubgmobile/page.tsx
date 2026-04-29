'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';

const actionCards = [
  {
    title: 'Players',
    stats: '4+ Players',
    image: '/players.jpg',
    variant: 'players',
  },
  {
    title: 'Maps',
    stats: '7 Maps',
    image: '/maps.png',
    variant: 'maps',
  },
  {
    title: 'Upcoming Tournaments',
    stats: '',
    image: '/tournaments.webp',
    variant: 'tournaments',
  },
];

import Footer from '../components/Footer';

export default function PUBGPage() {
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
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />
      <div className="blob" style={{ width: '300px', height: '300px', top: '50%', left: '55%', background: '#22C55E', opacity: 0.07 }} />

      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button
                onClick={() => router.push('/')}
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

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: '920px', width: '100%', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '2.5rem', color: 'var(--text-primary)' }}>
              PUBG Mobile
              <br />
              <span style={{ color: '#22C55E' }}>Esports</span>
            </h2>

            <div className="pubg-action-grid" style={{
              marginBottom: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '0.85rem',
              maxWidth: '680px',
              margin: '0 auto 4rem'
            }}>
              {actionCards.map((card) => (
                <div
                  key={card.title}
                  className="module-card-v5"
                  onClick={() => {
                    let route = null;
                    if (card.title === 'Maps') route = '/pubgmobile/maps';
                    if (card.title === 'Players') route = '/pubgmobile/players';
                    
                    if (route) router.push(route);
                    else console.log(`Navigating to ${card.title}`);
                  }}
                >
                  <div className="card-image-wrapper-v5" style={{ position: 'relative', height: '160px' }}>
                    <NextImage
                      src={card.image}
                      alt={card.title}
                      className="module-image-v5"
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-footer-v5">
                    <h3 className="footer-title-v5">{card.title}</h3>
                    <span className="footer-stats-v5">{card.stats}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push('/')}
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
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
