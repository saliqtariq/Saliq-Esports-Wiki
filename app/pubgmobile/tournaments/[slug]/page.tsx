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
                <h1 style={{ 
                  margin: 0, 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.75rem, 5vw, 2.6rem)', 
                  color: 'var(--text-primary)', 
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: '-0.03em'
                }}>
                  {organization.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#D1D5DB', textTransform: 'none', letterSpacing: '0.05em', fontWeight: 500 }}>Ongoing-Tournaments</span>
                  <span style={{ fontSize: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{organization.ongoingTournaments.length}</span>
                </div>
              </div>
            </div>
          </section>



          <section style={{ display: 'grid', gap: '1rem' }}>
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
                    className="tournament-card"
                    style={{
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      background: 'rgba(15, 23, 42, 0.25)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                      {tournament.logo ? (
                        <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                          <NextImage src={tournament.logo} alt={tournament.name} fill sizes="64px" style={{ objectFit: 'cover' }} />
                        </div>
                      ) : (
                        <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                          <span style={{ fontSize: '1.5rem' }}>🏆</span>
                        </div>
                      )}

                      <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 700 }}>{tournament.listName ?? tournament.name}</h3>
                        <p style={{ margin: '0.2rem 0 0', color: '#22C55E', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {tournament.status}
                        </p>
                      </div>

                      <div className="mobile-hide" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#22C55E', fontSize: '0.875rem', fontWeight: 700 }}>
                        View Details
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div>
                        <p style={{ margin: 0, color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Format</p>
                        <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>{tournament.format}</p>
                      </div>
                      <div>
                        <p style={{ margin: 0, color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Prize Pool</p>
                        <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>{tournament.prizePool}</p>
                      </div>
                      <div>
                        <p style={{ margin: 0, color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Start Date</p>
                        <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>{tournament.startDate}</p>
                      </div>
                      <div>
                        <p style={{ margin: 0, color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>{isDailyBattle ? 'Server' : 'Round'}</p>
                        <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>{isDailyBattle ? 'Asia' : (tournament.round || 'Qualifiers')}</p>
                      </div>
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
