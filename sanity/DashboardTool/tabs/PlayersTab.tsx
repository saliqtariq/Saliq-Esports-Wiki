import React from 'react';
import { IntentLink } from 'sanity/router';
import { UserIcon, RefreshIcon } from '../components/Icons';

interface PlayerData {
  _id: string;
  ign: string;
  name: string;
  team: string;
  country: string;
  role: string;
  image: any;
  teamLogo: any;
  staticImage?: string;
  staticTeamLogo?: string;
}

interface PlayersTabProps {
  players: PlayerData[];
  loading: boolean;
  searchTerm: string;
  urlFor: (source: any) => string | undefined;
  fetchData: () => void;
  showTitle?: boolean;
}

export const PlayersTab = ({ players, loading, searchTerm, urlFor, fetchData, showTitle = true }: PlayersTabProps) => {
  const filteredPlayers = players.filter(player => {
    const term = searchTerm.toLowerCase();
    return (
      (player.ign && player.ign.toLowerCase().includes(term)) ||
      (player.name && player.name.toLowerCase().includes(term)) ||
      (player.team && player.team.toLowerCase().includes(term)) ||
      (player.country && player.country.toLowerCase().includes(term)) ||
      (player.role && player.role.toLowerCase().includes(term))
    );
  });

  return (
    <div style={{ backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px', fontWeight: 600 }}>
          <UserIcon /> {showTitle ? 'Players Directory' : 'All Players'}
          {!showTitle && (
            <>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FF88', boxShadow: '0 0 6px #00FF88', marginLeft: '4px' }}></div>
              <span style={{ fontSize: '10px', color: '#6b7280', fontWeight: 'normal' }}>Live from CMS & Static</span>
            </>
          )}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {!showTitle && (
            <span onClick={fetchData} style={{ fontSize: '10px', color: '#00FF88', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RefreshIcon /> Refresh
            </span>
          )}
          {showTitle && (
            <IntentLink
              intent="create"
              params={{ type: 'player' }}
              style={{
                backgroundColor: '#00FF88', color: '#0F1117', padding: '8px 16px',
                borderRadius: '6px', fontWeight: 'bold', fontSize: '12px',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'
              }}
            >
              + Add New Player
            </IntentLink>
          )}
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280', fontSize: '14px' }}>Loading players...</div>
      ) : filteredPlayers.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280', fontSize: '14px' }}>
          No players found matching "{searchTerm}".
        </div>
      ) : (
        <table style={{ width: '100%', textAlign: 'left', fontSize: '12px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ color: '#6b7280', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <th style={{ paddingBottom: '12px', fontWeight: 500, width: '40px' }}>#</th>
              <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Player</th>
              <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Team</th>
              <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Role</th>
              <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Country</th>
              {showTitle && <th style={{ paddingBottom: '12px', fontWeight: 500, textAlign: 'right' }}>Actions</th>}
            </tr>
          </thead>
          <tbody style={{ fontSize: '14px' }}>
            {filteredPlayers.map((player, i) => (
              <tr key={player._id} style={{ borderBottom: i < filteredPlayers.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <td style={{ padding: '12px 0', color: '#6b7280' }}>{i + 1}</td>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {player.image ? (
                      <img src={urlFor(player.image)} alt={player.ign} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,255,136,0.2)' }} />
                    ) : player.staticImage ? (
                      <img src={player.staticImage} alt={player.ign} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,255,136,0.2)' }} />
                    ) : (
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0,255,136,0.1)', color: '#00FF88', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', border: '2px solid rgba(0,255,136,0.2)' }}>
                        {player.ign?.charAt(0)?.toUpperCase() || '?'}
                      </div>
                    )}
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{player.ign || 'Unknown'}</div>
                      {player.name && <div style={{ fontSize: '11px', color: '#6b7280' }}>{player.name}</div>}
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px 0', color: '#9ca3af', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {player.teamLogo ? (
                      <img src={urlFor(player.teamLogo)} alt={player.team || ''} style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'cover' }} />
                    ) : player.staticTeamLogo ? (
                      <img src={player.staticTeamLogo} alt={player.team || ''} style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold', color: 'white' }}>
                        {player.team?.charAt(0) || '?'}
                      </div>
                    )}
                    {player.team || 'Free Agent'}
                  </div>
                </td>
                <td style={{ padding: '12px 0', fontSize: '13px' }}>
                  {player.role ? (
                    <span style={{ backgroundColor: 'rgba(0,255,136,0.1)', color: '#00FF88', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'capitalize' as const }}>
                      {player.role}
                    </span>
                  ) : (
                    <span style={{ color: '#4b5563' }}>—</span>
                  )}
                </td>
                <td style={{ padding: '12px 0', color: '#9ca3af', fontSize: '13px' }}>
                  {player.country || '—'}
                </td>
                {showTitle && (
                  <td style={{ padding: '12px 0', textAlign: 'right' }}>
                    {!player._id.startsWith('static-') && (
                      <IntentLink
                        intent="edit"
                        params={{ id: player._id, type: 'player' }}
                        style={{ color: '#00FF88', fontSize: '12px', textDecoration: 'none', border: '1px solid rgba(0,255,136,0.3)', padding: '4px 8px', borderRadius: '4px' }}
                      >
                        Edit
                      </IntentLink>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
