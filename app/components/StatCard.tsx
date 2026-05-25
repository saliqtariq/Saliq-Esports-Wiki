interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
  accentColor: string;
}

export default function StatCard({ value, label, sublabel, accentColor }: StatCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px',
        padding: '10px 8px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        }}
      />
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontWeight: 800,
          color: accentColor,
          lineHeight: 1,
          marginBottom: '3px',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '10px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: '9px', color: '#4B5563', marginTop: '3px' }}>{sublabel}</div>
    </div>
  );
}
