import React from 'react'

export const StudioNavbar = (props: any) => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid #1f2937' }}>
      {props.renderDefault(props)}
    </div>
  )
}
