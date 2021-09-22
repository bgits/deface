import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import { HashRouter as Router } from 'react-router-dom'
import Info from './components/Info';
import Parts from './components/Parts';

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
  gridTemplateColumns: 'repeat(11, [col] 1fr)',
  gridTemplateRows: 'abcdefghijklmnopqrstuvwxy'.split('').map(x => `[${x}] 1fr `).join(''),
  gridGap: '0.5em',
  height: '173vw'
}))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Router>
          <Parts />
          <Info />
        </Router>
      </Root>
    </ThemeProvider>
  );
}
export default App;
