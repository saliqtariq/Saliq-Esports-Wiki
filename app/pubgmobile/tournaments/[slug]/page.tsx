import Link from 'next/link';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { organizationsBySlug, toTournamentSlug } from '../data';

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
              padding: 0,
              overflow: 'hidden',
              background: 'rgba(15, 23, 42, 0.24)',
              display: 'flex',
              gap: 0,
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              marginBottom: '1.1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
              <div
                style={{
                  width: '90px',
                  alignSelf: 'stretch',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <NextImage src={organization.logo} alt={organization.name} fill sizes="80px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '0.8rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.2rem' }}>
                <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {organization.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#D1D5DB', textTransform: 'none', letterSpacing: '0.05em', fontWeight: 500 }}>Ongoing-Tournaments</span>
                  <span style={{ fontSize: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{organization.ongoingTournaments.length}</span>
                </div>
              </div>
            </div>
          </section>



          <section style={{ display: 'grid', gap: '0.8rem' }}>
            {organization.ongoingTournaments.map((tournament) => {
              const isDailyBattle = tournament.name.toLowerCase().includes('daily battle');
              return (
              <Link
                key={tournament.name}
                href={`/pubgmobile/tournaments/${organization.slug}/${toTournamentSlug(tournament.name)}`}
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
                    background: 'rgba(15, 23, 42, 0.2)',
                  }}
                >
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{tournament.name}</h3>
                  <p style={{ margin: '0.35rem 0 0.75rem', color: '#22C55E', fontSize: '0.84rem', fontWeight: 700 }}>{tournament.status}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.6rem' }}>
                    <p style={{ margin: 0, color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>{tournament.format}</p>
                    <p style={{ margin: 0, color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}><strong style={{ color: '#F3F4F6' }}>Prize:</strong> {tournament.prizePool}</p>
                    <p style={{ margin: 0, color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}><strong style={{ color: '#F3F4F6' }}>Start:</strong> {tournament.startDate}</p>
                    {isDailyBattle ? (
                      <p style={{ margin: 0, color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}><strong style={{ color: '#F3F4F6' }}>Server:</strong> Asia</p>
                    ) : (
                      <p style={{ margin: 0, color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}><strong style={{ color: '#F3F4F6' }}>Round:</strong> Qualifiers</p>
                    )}
                  </div>
                </article>
              </Link>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
