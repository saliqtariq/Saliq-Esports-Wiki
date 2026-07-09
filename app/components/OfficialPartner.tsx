import React from 'react';

export default function OfficialPartner() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', paddingTop: '4px' }}>
      <a href="https://www.instagram.com/tyson_globalesports" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', opacity: 0.85, transition: 'opacity 0.2s ease' }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
      >
        <img 
          src="/tysonlogo.jpg" 
          alt="Tyson Esports" 
          style={{ height: '32px', width: 'auto', borderRadius: '4px' }} 
        />
        <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: 700, letterSpacing: '0.02em', fontFamily: 'var(--font-display)' }}>
          Tyson Esports
        </span>
      </a>
      <span style={{ fontSize: '10px', color: '#ffffff', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: '2px' }}>
        Official Partner
      </span>
    </div>
  );
}
