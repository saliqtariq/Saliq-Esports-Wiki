import React from 'react';
import { UserIcon, TrophyIcon, SettingsIcon } from './Icons';

export const SidebarItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) => {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '10px 16px', borderRadius: '8px', cursor: 'pointer',
      transition: 'all 0.2s',
      backgroundColor: active ? 'rgba(0,255,136,0.1)' : 'transparent',
      color: active ? '#00FF88' : '#9ca3af',
      border: active ? '1px solid rgba(0,255,136,0.2)' : '1px solid transparent',
      fontSize: '14px', fontWeight: 500,
    }}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  return (
    <div style={{
      width: '256px', borderRight: '1px solid rgba(255,255,255,0.05)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      flexShrink: 0, height: '100%', overflow: 'hidden',
    }}>
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <img src="/favicon.png" alt="Saliq" style={{
            width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover',
          }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 'bold', letterSpacing: '3px', fontSize: '18px' }}>SALIQ</div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#9ca3af', textTransform: 'uppercase' as const }}>Esports</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <SidebarItem icon={<UserIcon />} label="Overview" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <SidebarItem icon={<UserIcon />} label="Players" active={activeTab === 'Players'} onClick={() => setActiveTab('Players')} />
          <SidebarItem icon={<TrophyIcon />} label="Tournaments" active={activeTab === 'Tournaments'} onClick={() => setActiveTab('Tournaments')} />
          <SidebarItem icon={<SettingsIcon />} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/favicon.png" alt="Saliq Admin" style={{
            width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover',
            border: '2px solid rgba(0,255,136,0.3)',
          }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Saliq Admin</div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>Super Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
