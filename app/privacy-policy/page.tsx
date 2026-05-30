import BackButton from '../components/BackButton';

export default function PrivacyPolicyPage() {
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
            <BackButton href="/" variant="compact">Back to Home</BackButton>
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
              Privacy Policy
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
                Welcome to Saliq Esports your privacy is important to us.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                We may collect and display the following information about esports players:
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Real Name</li>
                <li>In-Game Name (IGN)</li>
                <li>Profile Pictures</li>
                <li>Date of Birth</li>
                <li>Achievements and Tournament History</li>
                <li>Team History</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                This information is collected from publicly available sources or provided by users/players.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. How We Use This Information</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                We use the collected data to:
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Create and maintain player profiles</li>
                <li>Display esports statistics and achievements</li>
                <li>Improve our platform and user experience</li>
              </ul>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Public Data</h2>
              <p style={{ marginBottom: '1rem' }}>
                Most of the data displayed on our website is publicly available information related to esports players.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                If you believe any information is incorrect or should not be displayed, you can contact us for removal or correction.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Data Accuracy</h2>
              <p style={{ marginBottom: '1rem' }}>
                We try our best to keep information accurate and up to date, but we do not guarantee complete accuracy.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>5. Third-Party Content</h2>
              <p style={{ marginBottom: '1rem' }}>
                Images and data may come from third-party sources. We do not claim ownership unless stated.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>6. User Data (If Applicable)</h2>
              <p style={{ marginBottom: '1rem' }}>
                If we collect user data in the future (such as emails or accounts), this policy will be updated accordingly.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>7. Data Removal Requests</h2>
              <p style={{ marginBottom: '0.25rem' }}>
                If you are a player and want your data removed or edited, please contact us at:
              </p>
              <p style={{ marginBottom: '0.25rem', fontWeight: 600 }}>
               Email: saliqtariq2@gmail.com
              </p>
             

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>8. Changes to This Policy</h2>
              <p style={{ marginBottom: '1rem' }}>
                We may update this Privacy Policy at any time. Changes will be posted on this page.
              </p>

              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>9. Contact Us</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                If you have any questions, contact us at:
              </p>
              <p style={{ fontWeight: 600 }}>
                0335-8746804
              </p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
