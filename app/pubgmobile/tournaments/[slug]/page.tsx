import Link from 'next/link';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { organizationsBySlug } from '../data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OrganizationTournamentsPage({ params }: PageProps) {
  const { slug } = await params;
  const organization = organizationsBySlug[slug];

  if (!organization) notFound();

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />
      <div className="dynamic-grid" />

      <header style={{ padding: '1.75rem 2rem 1rem', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Link
            href="/pubgmobile/tournaments"
            style={{
              display: 'inline-flex',
              textDecoration: 'none',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '10px',
              padding: '9px 16px',
              color: '#22C55E',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Back
          </Link>
        </div>
      </header>

      <main style={{ flex: 1, padding: '1rem 1.5rem 3rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <section
            style={{
              border: '1px solid rgba(34, 197, 94, 0.22)',
              borderRadius: '16px',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.24)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '1.1rem',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <NextImage src={organization.logo} alt={organization.name} fill sizes="72px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'var(--text-primary)' }}>
                {organization.name}
              </h1>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{organization.shortInfo}</p>
            </div>
          </section>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.1rem' }}>
            <article style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem', background: 'rgba(2, 6, 23, 0.35)' }}>
              <p style={{ margin: 0, fontSize: '0.76rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Region</p>
              <h2 style={{ margin: '0.35rem 0 0', fontSize: '1rem', color: 'var(--text-primary)' }}>{organization.region}</h2>
            </article>
            <article style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem', background: 'rgba(2, 6, 23, 0.35)' }}>
              <p style={{ margin: 0, fontSize: '0.76rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Founded</p>
              <h2 style={{ margin: '0.35rem 0 0', fontSize: '1rem', color: 'var(--text-primary)' }}>{organization.founded}</h2>
            </article>
            <article style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem', background: 'rgba(2, 6, 23, 0.35)' }}>
              <p style={{ margin: 0, fontSize: '0.76rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ongoing Tournaments</p>
              <h2 style={{ margin: '0.35rem 0 0', fontSize: '1rem', color: 'var(--text-primary)' }}>{organization.ongoingTournaments.length}</h2>
            </article>
          </section>

          <section style={{ display: 'grid', gap: '0.8rem' }}>
            {organization.ongoingTournaments.map((tournament) => (
              <article
                key={tournament.name}
                style={{
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '14px',
                  padding: '1rem',
                  background: 'rgba(15, 23, 42, 0.2)',
                }}
              >
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{tournament.name}</h3>
                <p style={{ margin: '0.35rem 0 0.75rem', color: '#22C55E', fontSize: '0.84rem', fontWeight: 700 }}>{tournament.status}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.6rem' }}>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-primary)' }}>Format:</strong> {tournament.format}</p>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-primary)' }}>Prize:</strong> {tournament.prizePool}</p>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-primary)' }}>Start:</strong> {tournament.startDate}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
