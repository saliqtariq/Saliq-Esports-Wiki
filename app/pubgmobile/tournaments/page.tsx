'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NextImage from 'next/image';
import Footer from '../../components/Footer';
import { organizations } from './data';

export default function TournamentsPage() {
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
      <div className="dynamic-grid" />

      <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <button
            onClick={() => router.push('/pubgmobile')}
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '10px',
              padding: '9px 16px',
              cursor: 'pointer',
              color: '#22C55E',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Back
          </button>

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

      <main style={{ flex: 1, padding: '2rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
            PUBG Mobile <span style={{ color: '#22C55E' }}>Pakistan Tournaments</span>
          </h1>

          <section
            style={{
              marginTop: '1.75rem',
              display: 'grid',
              gap: '0.9rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {organizations.map((org) => (
              <Link
                key={org.slug}
                href={`/pubgmobile/tournaments/${org.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <article
                  style={{
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '14px',
                    padding: '1rem',
                    background: 'rgba(15, 23, 42, 0.22)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.95rem',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.16)',
                      background: 'rgba(2, 6, 23, 0.45)',
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <NextImage
                      src={org.logo}
                      alt={org.name}
                      fill
                      sizes="56px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h2 style={{ margin: 0, fontSize: '1.08rem', color: 'var(--text-primary)' }}>{org.name}</h2>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
