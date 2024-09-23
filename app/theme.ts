'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a5c370',
      contrastText: '#f3f9f1',
    },
    secondary: {
      main: '#3e6134',
      contrastText: '#f3f9f1',
    },
    background: {
      default: '#fbfbf4',
    },
  },
  typography: {
    fontFamily: 'var(--font-lato)',
    h1: {
      fontFamily: 'var(--font-playfair-display)',
    },
    h2: {
      fontFamily: 'var(--font-playfair-display)',
    },
    h3: {
      fontFamily: 'var(--font-playfair-display)',
    },
  }
});

export default theme;