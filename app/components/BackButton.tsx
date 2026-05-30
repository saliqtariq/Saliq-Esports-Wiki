'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { CSSProperties, ReactNode } from 'react';

type BackButtonVariant = 'default' | 'header' | 'compact';

type BackButtonProps = {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: BackButtonVariant;
  style?: CSSProperties;
};

const baseStyle: CSSProperties = {
  background: 'rgba(34, 197, 94, 0.1)',
  border: '1px solid rgba(34, 197, 94, 0.2)',
  borderRadius: '10px',
  padding: '9px 16px',
  cursor: 'pointer',
  color: '#22C55E',
  fontSize: '0.875rem',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
};

const variantStyles: Record<BackButtonVariant, CSSProperties> = {
  default: {
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    border: '1px solid rgba(34, 197, 94, 0.25)',
  },
  header: {},
  compact: {
    background: 'rgba(34, 197, 94, 0.08)',
    border: '1.5px solid rgba(34, 197, 94, 0.2)',
    borderRadius: '12px',
    padding: '10px 20px',
    fontSize: '0.9rem',
    fontWeight: 700,
  },
};

export default function BackButton({
  children = 'Back',
  href,
  onClick,
  variant = 'header',
  style,
}: BackButtonProps) {
  const router = useRouter();
  const buttonStyle = { ...baseStyle, ...variantStyles[variant], ...style };

  const hoverIn = (element: HTMLElement) => {
    element.style.background = 'rgba(34, 197, 94, 0.15)';
    element.style.borderColor = 'rgba(34, 197, 94, 0.4)';
  };

  const hoverOut = (element: HTMLElement) => {
    element.style.background = String(buttonStyle.background);
    element.style.borderColor = String(buttonStyle.border).replace(/^.*solid\s+/, '');
  };

  if (href) {
    return (
      <Link
        href={href}
        style={buttonStyle}
        onMouseEnter={(event) => hoverIn(event.currentTarget)}
        onMouseLeave={(event) => hoverOut(event.currentTarget)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick ?? (() => router.back())}
      style={buttonStyle}
      onMouseEnter={(event) => hoverIn(event.currentTarget)}
      onMouseLeave={(event) => hoverOut(event.currentTarget)}
    >
      {children}
    </button>
  );
}
