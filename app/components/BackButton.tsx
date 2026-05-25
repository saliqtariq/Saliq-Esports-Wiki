'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  href?: string;
  label?: string;
  showArrow?: boolean;
}

export default function BackButton({ href, label = 'Back', showArrow = false }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'rgba(34, 197, 94, 0.1)',
        border: '1px solid rgba(34, 197, 94, 0.2)',
        borderRadius: '10px',
        padding: '9px 16px',
        cursor: 'pointer',
        color: '#22C55E',
        fontSize: '0.875rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
      }}
    >
      {showArrow && <span>&larr;</span>}
      {label}
    </button>
  );
}
