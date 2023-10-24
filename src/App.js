import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TitleBar from './component/TitleBar';
import Home from './container/Home';
import React, { useState } from 'react';
import { Box } from '@mui/material';

export default function App() {
  const storedThemeMode = localStorage.getItem('themeMode');
  const [darkMode, setDarkMode] = useState(storedThemeMode === 'dark');

  const toggleThemeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode? '#121212':'#ede7f6',
      },
      primary: {
        main: '#7c4dff',
      },
      secondary: {
        main: '#536dfe',
      },
    },
    
    typography: {
      fontFamily: 'Poppins',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TitleBar toggleThemeMode={toggleThemeMode} darkMode={darkMode} />
      <Box sx={{ mt: 5,}}>
        <Home darkMode={darkMode}/>
      </Box>
    </ThemeProvider>
  );
}
