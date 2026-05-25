'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-secondary)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {isLight ? 'Light' : 'Dark'}
      </span>
      <button className="toggle-track" onClick={toggleTheme} aria-label="Toggle light/dark mode">
        <div className="toggle-thumb">
          <span>{isLight ? '\u2600' : '\u263D'}</span>
        </div>
      </button>
    </div>
  );
}
