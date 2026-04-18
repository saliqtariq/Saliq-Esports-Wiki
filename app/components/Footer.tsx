'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '4rem 2rem 3rem', width: '100%', background: 'var(--footer-bg)', borderTop: '1px solid var(--footer-border)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Top Row: Branding & Primary Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Left Column: Logo & Main Nav */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <h2 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '-0.03em', 
                margin: 0, 
                color: 'var(--text-primary)',
                background: 'linear-gradient(135deg, #E5E7EB 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                SALIK
              </h2>
            </div>
            <p style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 600,
              borderLeft: '2px solid rgba(255,255,255,0.1)',
              paddingLeft: '1rem',
              opacity: 0.8
            }}>
              The Ultimate Home for <span style={{ color: '#22C55E' }}>Pakistan</span> Esports
            </p>
            
            <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="#" className="footer-link-v2">Contact</a>
              <a href="#" className="footer-link-v2">Disclaimer</a>
              <a href="#" className="footer-link-v2">Privacy Policy</a>
            </nav>
          </div>

          {/* Right Column: Site Info */}
          <div style={{ flexShrink: 0, textAlign: 'left', maxWidth: '300px' }}>
            <p style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '0.9rem', 
              color: 'var(--text-primary)', 
              lineHeight: '1.6', 
              letterSpacing: '0.01em', 
              fontWeight: 500,
              opacity: 0.9,
              borderLeft: '2px solid var(--accent-green)',
              paddingLeft: '1.25rem',
            }}>
              Archiving the legacy and evolution of Pakistan&apos;s competitive esports landscape — with precision and passion.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />

        {/* Bottom Row: License & Socials */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* License text removed as requested */}
          <div style={{ fontSize: '0.75rem', color: '#6B7280', maxWidth: '400px' }}>
            <p style={{ margin: 0, opacity: 0.8 }}>&copy; 2025 SALIK. All rights reserved.</p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Discord */}
            <a href="#" className="social-icon" aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="social-icon" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Twitch */}
            <a href="#" className="social-icon" aria-label="Twitch">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
