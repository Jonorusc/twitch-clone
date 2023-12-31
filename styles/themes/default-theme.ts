import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  name: 'light',
  containerMaxWidth: '136.6rem', // laptop pro 15" width
  htmlFontSize: '62.5%', // 1rem = 10px
  palette: {
    text: {
      base: '#0e0e10',
      secondary: '#53535f',
      label: '#18181b'
    },
    background: '#f7f7f8',
    surface: '#efeff1',
    primary: '#9147ff',
    secondary: '#41a564',
    analogous1: '#a970ff',
    analogous2: '#4164a5',
    triadic1: '#ededef',
    triadic2: '#0e0e10',
    splitComplementary1: '#41a564',
    splitComplementary2: '#a56441',
    green: '#31C975',
    lightGreen: '#D4F4E2',
    blueGreen: '#00A19D',
    dark: '#1f1f23',
    darker: '#0e0e10',
    darkGrey: '#adadb838',
    darkerGrey: '#0a0a0b',
    grey: '#53535f',
    lightGrey: '#d3d3d3',
    darkenBlue: '#194B78',
    whiteSmoke: '#f5f5f5',
    white: '#ffffff',
    black: '#000000',
    red: '#e91916',
    warn: '#ffd37a',
    info: '#1f69ff',
    success: '#00f593',
    error: '#eb0400',
    accent: '#6441a5',
    transparent: 'transparent'
  },
  font: {
    family: 'Inter, Open Sans ,sans-serif',
    size: {
      xsmall: '1.3rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '3.6rem'
    },
    bold: 700,
    semiBold: 600,
    light: 500,
    normal: 400
  },
  border: {
    radius: '3rem'
  },
  shadow: {
    text: {
      small: '2px 2px 2px',
      medium: '4px 4px 4px',
      large: '6px 6px 6px'
    },
    box: {
      small: '0px 2px 7px -4px',
      medium: '1px 1px 9px 0px',
      large: '1px 1px 13px 3px'
    }
  },
  spacing: {
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '13rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
