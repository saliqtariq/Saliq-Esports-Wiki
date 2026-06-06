'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import BackButton from '../components/BackButton';

const actionCards = [
  {
    title: 'Players',
    stats: '4+ Players',
    image: '/Players-Newpic.png',
    variant: 'players',
  },
  {
    title: 'Tournaments',
    stats: '',
    image: '/Tournaments-Picnew.jpg',
    variant: 'tournaments',
  },
  {
    title: 'Maps',
    stats: '7 Maps',
    image: '/maps.png',
    variant: 'maps',
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
              <BackButton href="/">Back</BackButton>
            </div>

            {/* Official Partner */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', paddingTop: '4px' }}>
              <a href="https://www.instagram.com/tyson_globalesports" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', opacity: 0.85, transition: 'opacity 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
              >
                <img 
                  src="/tysonlogo.jpg" 
                  alt="Tyson Esports" 
                  style={{ height: '32px', width: 'auto', borderRadius: '4px' }} 
                />
                <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: 700, letterSpacing: '0.02em', fontFamily: 'var(--font-display)' }}>
                  Tyson Esports
                </span>
              </a>
              <span style={{ fontSize: '10px', color: '#ffffff', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: '2px' }}>
                Official Partner
              </span>
            </div>
          </div>
        </header>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: '920px', width: '100%', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '2.5rem', color: 'var(--text-primary)' }}>
              PUBG Mobile
              <br />
              <span style={{ color: '#22C55E' }}>Esports Pakistan</span>
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
                    if (card.title === 'Tournaments') route = '/pubgmobile/tournaments';
                    
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

            <BackButton href="/" variant="default" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              Go Back
            </BackButton>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
