'use client';

import NextImage from 'next/image';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 300,
          cursor: 'pointer',
        }}
      >
        &times;
      </div>
      <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
        <NextImage
          src={src}
          alt={alt}
          width={800}
          height={1000}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '90vh',
            borderRadius: '8px',
            boxShadow: '0 0 50px rgba(34, 197, 94, 0.2)',
          }}
        />
      </div>
    </div>
  );
}
