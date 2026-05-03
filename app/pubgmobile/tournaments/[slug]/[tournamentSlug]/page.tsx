import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { organizationsBySlug, toTournamentSlug } from '../../data';
import TournamentContent from './TournamentContent';

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
  
  if (!tournament) notFound();
  
  const isDailyBattle = tournament.name.toLowerCase().includes('daily battle');

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
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <TournamentContent 
            tournament={tournament} 
            organization={organization} 
            isDailyBattle={isDailyBattle} 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
