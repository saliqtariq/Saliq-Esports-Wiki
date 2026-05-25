'use client';

import type { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';
import BackButton from './BackButton';

interface PageHeaderProps {
  backHref?: string;
  backLabel?: string;
  showBack?: boolean;
  maxWidth?: string;
  children?: ReactNode;
}

export default function PageHeader({
  backHref,
  backLabel = 'Back',
  showBack = true,
  maxWidth = '960px',
  children,
}: PageHeaderProps) {
  return (
    <header style={{ padding: '1.75rem 2rem 1rem', width: '100%' }}>
      <div style={{ maxWidth, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {showBack && <BackButton href={backHref} label={backLabel} />}
          {children}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
