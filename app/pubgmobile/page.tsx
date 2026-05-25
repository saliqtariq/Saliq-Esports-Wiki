'use client';

import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import Footer from '../components/Footer';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';

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

export default function PUBGPage() {
  const router = useRouter();

  return (
    <PageShell>
      <PageHeader backHref="/" />

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
    </PageShell>
  );
}
