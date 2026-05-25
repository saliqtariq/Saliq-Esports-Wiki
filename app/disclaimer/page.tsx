import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      {/* Background blobs */}
      <div className="blob" style={{ width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' }} />
      <div className="blob" style={{ width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 }} />

      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* Header */}
        <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <Link
              href="/"
              style={{
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1.5px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '12px',
                padding: '10px 20px',
                cursor: 'pointer',
                color: '#22C55E',
                fontSize: '0.9rem',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem 1rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ maxWidth: '800px', width: '100%' }}>
            
            <h1 style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#fff',
              margin: '0 0 2rem 0',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              Disclaimer
            </h1>

            <div style={{ 
              background: '#111827', 
              padding: '2.5rem', 
              borderRadius: '8px', 
              border: '1px solid #1f2937',
              borderLeft: '4px solid #22C55E',
              color: '#fff',
              fontSize: '1rem',
              lineHeight: '1.8'
            }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                Welcome to Saliq Esports.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>1. General Information</h2>
              <p style={{ marginBottom: '1rem' }}>
                The information provided on this website is for general informational purposes only. While we strive to keep data accurate and up to date, we make no guarantees of completeness, reliability, or accuracy.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. No Official Affiliation</h2>
              <p style={{ marginBottom: '1rem' }}>
                Saliq Esports is an independent platform and is not affiliated with, endorsed by, or connected to any esports organizations, teams, or game publishers.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                All trademarks, names, and logos belong to their respective owners.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Player Data</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                Player information such as:
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Names</li>
                <li>In-game names</li>
                <li>Achievements</li>
                <li>Team history</li>
                <li>Images</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                is collected from public sources or community contributions.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                We do not claim ownership of this data.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Accuracy of Information</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                We do our best to ensure accuracy, but:
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Data may be outdated</li>
                <li>Information may contain errors</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                We are not responsible for any decisions made based on this information.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>5. External Links</h2>
              <p style={{ marginBottom: '1rem' }}>
                Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>6. Content Removal</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                If you are a player or rightful owner of any content and wish to:
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Update information</li>
                <li>Remove data</li>
              </ul>
              <p style={{ marginBottom: '0.75rem' }}>
                Please contact us:
              </p>
              <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
                Email: saliqtariq2@gmail.com
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>7. Use at Your Own Risk</h2>
              <p style={{ marginBottom: '1rem' }}>
                By using this website, you agree that all information is used at your own risk.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>8. Changes to This Disclaimer</h2>
              <p style={{ marginBottom: '1rem' }}>
                We may update this Disclaimer at any time. Changes will be posted on this page.
              </p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
