import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, [col] 1fr)',
  gridTemplateRows: 'abcdefghijklmnopqrstuvwxy'.split('').map(x => `[${x}] 1fr `).join(''),
  gridGap: '0.5em'
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root></Root>
    </ThemeProvider>
  );
}
export default App;
