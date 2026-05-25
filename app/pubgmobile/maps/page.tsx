'use client';

import Link from 'next/link';
import { useState, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import Footer from '../../components/Footer';
import PageShell from '../../components/PageShell';
import PageHeader from '../../components/PageHeader';

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
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleMapClick = (event: MouseEvent<HTMLAnchorElement>, _slug: string) => {
    if (isNavigating) {
      event.preventDefault();
      return;
    }
    setIsNavigating(true);
  };

  return (
    <PageShell>
      <PageHeader />

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
              <Link
                key={map.slug}
                href={`/pubgmobile/maps/${map.slug}`}
                className="module-card-v5"
                onClick={(event) => handleMapClick(event, map.slug)}
                style={{
                  height: '180px',
                  position: 'relative',
                  flex: '1 1 280px',
                  maxWidth: '310px',
                  minWidth: '260px',
                  borderRadius: '16px'
                }}
              >
                <div className="card-image-wrapper-v5" style={{ height: '100%', position: 'relative' }}>
                  <NextImage
                    src={map.image}
                    alt={map.title}
                    className="module-image-v5"
                    fill
                    sizes="(max-width: 768px) 100vw, 310px"
                    style={{ opacity: 0.85, objectFit: 'cover' }}
                  />
                  {/* Blur mask for text area */}
                  <div 
                    className="mobile-hide-blur"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '38%',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                      zIndex: 1,
                      pointerEvents: 'none'
                    }} 
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
              </Link>
            ))}
          </div>

          <button
            onClick={() => router.back()}
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
    </PageShell>
  );
}
