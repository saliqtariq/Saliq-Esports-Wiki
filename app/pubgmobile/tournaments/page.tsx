'use client';

import Link from 'next/link';
import NextImage from 'next/image';
import Footer from '../../components/Footer';
import PageShell from '../../components/PageShell';
import PageHeader from '../../components/PageHeader';
import { organizations } from './data';

const TWO_BLOB = [
  { width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' },
  { width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 },
];

export default function TournamentsPage() {
  return (
    <PageShell blobs={TWO_BLOB}>
      <PageHeader backHref="/pubgmobile" />

      <main style={{ flex: 1, padding: '2rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto 0.9rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0, color: 'var(--text-primary)' }}>
              PUBG Mobile <span style={{ color: '#22C55E' }}>Pakistan Tournaments</span>
            </h1>
          </div>

          <section
            style={{
              marginTop: '1.75rem',
              display: 'grid',
              gap: '0.65rem',
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
                    padding: 0,
                    overflow: 'hidden',
                    background: 'rgba(15, 23, 42, 0.22)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0,
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
                  <div style={{ minWidth: 0, padding: '0.75rem 1rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{org.name}</h2>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </PageShell>
  );
}
