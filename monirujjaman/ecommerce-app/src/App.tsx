import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
          <CssBaseline/>
          <Home/>
    </ThemeProvider>
  );
}

export default App;
