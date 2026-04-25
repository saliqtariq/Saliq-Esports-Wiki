'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/app/components/Footer';

export default function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <header style={{ padding: '1.5rem 2rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <button
            onClick={() => router.back()}
            style={{
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1.5px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              padding: '10px 20px',
              cursor: 'pointer',
              color: '#22C55E',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            &larr; Back to Roster
          </button>
        </header>

        {/* Main Content Area - Reset for Manual Design */}
        <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          {/* Design manually here */}
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', marginTop: '4rem' }}>
            Player Profile: {slug.toUpperCase()}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
