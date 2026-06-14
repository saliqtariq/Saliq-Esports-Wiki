import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#ffffff',
  '--my-black': '#0a0a0a',
  '--saliq-brand': '#00ff88', // A cool esports green/neon color
  '--my-red': '#ff4d4d',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': '#121212',
  '--component-text-color': props['--my-white'],

  // Brand
  '--brand-primary': props['--saliq-brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--saliq-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  // State
  '--state-info-color': props['--saliq-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  // Navbar
  '--main-navigation-color': '#000000',
  '--main-navigation-color--inverted': props['--my-white'],

  // Focus
  '--focus-color': props['--saliq-brand'],
})
