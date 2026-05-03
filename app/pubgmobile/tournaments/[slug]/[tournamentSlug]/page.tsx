import Link from 'next/link';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { organizationsBySlug, toTournamentSlug } from '../../data';

type PageProps = {
  params: Promise<{ slug: string; tournamentSlug: string }>;
};

export default async function TournamentDetailsPage({ params }: PageProps) {
  const { slug, tournamentSlug } = await params;
  const organization = organizationsBySlug[slug];

  if (!organization) notFound();

  const tournament = organization.ongoingTournaments.find(
    (item) => toTournamentSlug(item.name) === tournamentSlug,
  );
  const isDailyBattle = tournament?.name.toLowerCase().includes('daily battle') ?? false;

  if (!tournament) notFound();

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />
      <div className="dynamic-grid" />

      <header style={{ padding: '1.75rem 2rem 1rem', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
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
            All Orgs
          </Link>
          <Link
            href={`/pubgmobile/tournaments/${organization.slug}`}
            style={{
              display: 'inline-flex',
              textDecoration: 'none',
              background: 'rgba(250, 204, 21, 0.08)',
              border: '1px solid rgba(250, 204, 21, 0.25)',
              borderRadius: '10px',
              padding: '9px 16px',
              color: '#FACC15',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Back To {organization.name}
          </Link>
        </div>
      </header>

      <main style={{ flex: 1, padding: '1rem 1.5rem 3rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          <section
            style={{
              border: '1px solid rgba(34, 197, 94, 0.22)',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'rgba(15, 23, 42, 0.24)',
              display: 'flex',
              alignItems: 'stretch',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ width: '150px', position: 'relative', minHeight: '90px' }}>
              <NextImage src={tournament.logo ?? organization.logo} alt={tournament.name} fill sizes="150px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '0.9rem 1.2rem', display: 'grid', gap: '0.35rem' }}>
              <p style={{ margin: 0, color: '#22C55E', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Tournament Details
              </p>
              <h1 style={{ margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', lineHeight: 1.1 }}>
                {tournament.name}
              </h1>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Organized by {organization.name}
              </p>
            </div>
          </section>

          <section style={{ border: '1px solid rgba(250, 204, 21, 0.22)', borderRadius: '14px', padding: '1rem', background: 'rgba(2, 6, 23, 0.35)' }}>
            <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
              <div>
                <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Status</p>
                <p style={{ margin: '0.2rem 0 0', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>{tournament.status}</p>
              </div>
              <div>
                <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Entry</p>
                <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '1rem', fontWeight: 700 }}>{tournament.format}</p>
              </div>
              <div>
                <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Prize Pool</p>
                <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '1rem', fontWeight: 700 }}>{tournament.prizePool}</p>
              </div>
              <div>
                <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Start Date</p>
                <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '1rem', fontWeight: 700 }}>{tournament.startDate}</p>
              </div>
              {isDailyBattle ? (
                <div>
                  <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Server</p>
                  <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '1rem', fontWeight: 700 }}>Asia</p>
                </div>
              ) : (
                <div>
                  <p style={{ margin: 0, color: '#FACC15', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}>Round</p>
                  <p style={{ margin: '0.2rem 0 0', color: '#E5E7EB', fontSize: '1rem', fontWeight: 700 }}>Qualifiers</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
