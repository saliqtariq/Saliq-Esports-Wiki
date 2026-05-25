import type { ReactNode } from 'react';

type Blob = {
  width: string;
  height: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  background: string;
  opacity?: number;
};

const DEFAULT_BLOBS: Blob[] = [
  { width: '520px', height: '520px', top: '-120px', left: '-140px', background: '#22C55E' },
  { width: '400px', height: '400px', bottom: '80px', right: '-100px', background: '#FACC15', opacity: 0.1 },
  { width: '300px', height: '300px', top: '50%', left: '55%', background: '#22C55E', opacity: 0.07 },
];

interface PageShellProps {
  children: ReactNode;
  blobs?: Blob[];
}

export default function PageShell({ children, blobs = DEFAULT_BLOBS }: PageShellProps) {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="blob"
          style={{
            width: blob.width,
            height: blob.height,
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            background: blob.background,
            opacity: blob.opacity,
          }}
        />
      ))}

      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}
