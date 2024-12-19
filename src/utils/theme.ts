export const colors = {
  primary: {
    light: '#1a1a95',
    DEFAULT: '#000080',
    dark: '#00006b',
  },
  accent: {
    light: '#b4ffb4',
    DEFAULT: '#98FF98',
    dark: '#7cff7c',
  },
  text: {
    light: '#ffffff',
    dark: '#1a1a1a',
    muted: '#666666'
  },
  background: {
    light: '#ffffff',
    dark: '#000033',
    gradient: {
      start: 'rgba(0, 0, 128, 0.95)',
      end: 'rgba(0, 0, 128, 1)'
    }
  }
};

export const spacing = {
  section: {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  },
  container: {
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8'
  }
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const transitions = {
  default: 'all 0.3s ease-in-out',
  slow: 'all 0.5s ease-in-out',
  fast: 'all 0.15s ease-in-out'
};