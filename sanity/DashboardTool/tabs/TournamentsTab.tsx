import React from 'react';
import { IntentLink } from 'sanity/router';
import { TrophyIcon } from '../components/Icons';

export const TournamentsTab = () => {
  return (
    <div style={{ backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', textAlign: 'center', color: '#9ca3af' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px', fontWeight: 600 }}>
          <TrophyIcon /> Tournaments
        </div>
        <IntentLink
          intent="create"
          params={{ type: 'tournament' }}
          style={{
            backgroundColor: '#00FF88', color: '#0F1117', padding: '8px 16px',
            borderRadius: '6px', fontWeight: 'bold', fontSize: '12px',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          + Add Tournament
        </IntentLink>
      </div>
      <div style={{ padding: '40px' }}>
        Manage tournaments here.
      </div>
    </div>
  );
};
