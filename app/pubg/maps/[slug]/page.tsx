'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';

type MapInfo = {
  creator: string[];
  location: string;
  releaseDate: string;
  theme: string;
  competitionSpan: string;
  size: string;
  gameVersion: string;
  gameModes: string;
};

const mapData: Record<string, { title: string; info: MapInfo; topDownImage: string }> = {
  erangel: {
    title: 'Erangel',
    topDownImage: '/maps/erangel_topdown.png',
    info: {
      creator: ['KRAFTON', 'Level Infinite', 'LightSpeed Studios'],
      location: 'Russia',
      releaseDate: '2018',
      theme: 'Forest',
      competitionSpan: '2018 – Current',
      size: '8x8 km',
      gameVersion: 'PUBGM',
      gameModes: 'Battle Royale',
    },
  },
};

export default function MapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = React.use(params);
  const data = mapData[slug.toLowerCase()];

  // Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
        <h1 style={{ color: 'var(--text-secondary)' }}>Map "{slug}" not found.</h1>
        <button onClick={() => router.back()} style={{ marginTop: '1rem', color: '#22C55E' }}>Go Back</button>
      </div>
    );
  }

  // Zoom Logic
  const handleWheel = (e: React.WheelEvent) => {
    if (!isOpen) return;
    e.preventDefault();
    const delta = -e.deltaY;
    const newScale = Math.min(Math.max(scale + delta * 0.001, 1), 5);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  // Pan Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isOpen || scale === 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isOpen) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: 'var(--bg-primary)' }}>
      {/* Background blobs */}
      <div className="blob" style={{ width: '500px', height: '500px', top: '-150px', left: '-100px', background: '#22C55E', opacity: 0.15 }} />
      <div className="blob" style={{ width: '300px', height: '300px', bottom: '100px', right: '-50px', background: '#FACC15', opacity: 0.05 }} />

      <div className="dynamic-grid" />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* ===== HEADER ===== */}
        <header style={{ padding: '1.5rem 2rem', width: '100%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button
              onClick={() => router.back()}
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '12px',
                padding: '10px 20px',
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
              <span>←</span> Back to Maps
            </button>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main style={{ flex: 1, padding: '0 1.5rem 4rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>
              {data.title}
            </h1>
            <div style={{ height: '4px', width: '60px', background: '#22C55E', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* Left: Map Viewer Card */}
            <div 
              onClick={() => setIsOpen(true)}
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(255, 255, 255, 0.05)', 
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'zoom-in',
                position: 'relative'
              }}
              className="map-card-hover"
            >
              <img src={data.topDownImage} alt={`${data.title} Map`} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            {/* Right: Info Card */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '24px', overflow: 'hidden' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.15)', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h2 style={{ color: '#22C55E', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Map Information</h2>
              </div>
                <div style={{ padding: '1.5rem' }}>
                <InfoRow 
                  label="Creator" 
                  value={data.info.creator.join(', ')} 
                  isHoverable
                />
                <InfoRow label="Location" value={data.info.location} />
                <InfoRow label="Release Date" value={data.info.releaseDate} />
                <InfoRow label="Theme" value={data.info.theme} />
                <InfoRow label="Competition Span" value={data.info.competitionSpan} />
                <InfoRow label="Size" value={data.info.size} />
                <InfoRow 
                  label="Game Version" 
                  value={data.info.gameVersion} 
                  isHoverable
                />
                <InfoRow label="Game Mode(s)" value={data.info.gameModes} last />
              </div>
            </div>
          </div>

          {/* ===== MAP OVERVIEW SECTION ===== */}
          <div style={{ 
            marginTop: '4rem', 
            padding: '2.5rem', 
            background: 'rgba(255, 255, 255, 0.01)', 
            borderLeft: '4px solid #22C55E',
            borderRadius: '0 24px 24px 0',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ 
              color: 'var(--text-primary)', 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.75rem', 
              fontWeight: 800, 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              The King of Maps
            </h2>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem', 
              lineHeight: 1.8, 
              maxWidth: '850px',
              fontWeight: 400
            }}>
              Erangel is the inaugural map of <span style={{ color: '#22C55E', fontWeight: 600 }}>PUBG Mobile</span>, offering players an expansive 8x8 km battlefield that combines urban landscapes, rural areas, and diverse terrains. 
              <br /><br />
              Set on a fictional Russian island in the <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Black Sea</span>, Erangel presents a rich tapestry of environments, from sprawling cities to dense forests and open fields. 
              The map's architecture and layout encourage a wide variety of combat scenarios, catering perfectly to both intense close-quarters skirmishes and high-stakes, long-range engagements.
            </p>
          </div>

        </main>

        <Footer />
      </div>

      {/* ===== FULL SCREEN MAP MODAL ===== */}
      {isOpen && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDragging ? 'grabbing' : 'auto',
            overflow: 'hidden'
          }}
        >
          {/* Close interaction hint */}
          <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'rgba(255,255,255,0.5)', zIndex: 10 }}>
            Press ESC or Click Outside to Close
          </div>

          <div 
            ref={containerRef}
            style={{
              transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            <img 
              src={data.topDownImage} 
              alt={data.title} 
              draggable={false}
              style={{ 
                width: 'auto', 
                height: 'auto', 
                maxWidth: '100%', 
                maxHeight: '90vh', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                borderRadius: '8px',
                cursor: scale > 1 ? 'grab' : 'auto'
              }} 
            />
          </div>

          {/* Zoom Level Indicator */}
          {scale > 1 && (
            <div style={{ position: 'absolute', bottom: '2rem', background: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.4)', color: '#22C55E', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontSize: '0.875rem' }}>
              {(scale * 100).toFixed(0)}% Zoom
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .map-card-hover {
          transition: transform 0.4s ease, border-color 0.4s ease;
        }
        .map-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(34, 197, 94, 0.3) !important;
        }
      `}</style>
    </div>
  );
}

function InfoRow({ label, value, last, isHoverable }: { label: string; value: string; last?: boolean; isHoverable?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 0', borderBottom: last ? 'none' : '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.95rem' }}>
      <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</span>
      <span 
        style={{ 
          color: isHoverable ? '#22C55E' : 'var(--text-primary)', 
          fontWeight: 600, 
          textAlign: 'right',
          cursor: isHoverable ? 'pointer' : 'default',
          transition: 'all 0.3s ease',
          opacity: isHoverable ? 0.9 : 1,
          textShadow: isHoverable ? '0 0 10px rgba(34, 197, 94, 0.2)' : 'none'
        }}
        onMouseEnter={(e) => {
          if (isHoverable) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.textShadow = '0 0 15px rgba(34, 197, 94, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (isHoverable) {
            (e.target as HTMLElement).style.opacity = '0.9';
            (e.target as HTMLElement).style.textShadow = '0 0 10px rgba(34, 197, 94, 0.2)';
          }
        }}
      >
        {value}
      </span>
    </div>
  );
}
