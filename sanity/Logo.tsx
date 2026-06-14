import React from 'react'

export const Logo = (props: any) => {
  const { renderDefault } = props

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src="/favicon.png"
        alt="Saliq Esports"
        style={{ width: '24px', height: '24px', borderRadius: '4px', objectFit: 'cover' }}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
