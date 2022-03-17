import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Theme from './Theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <CssBaseline/>
  <App />
</ThemeProvider>,
  document.getElementById('root')
);



reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={Theme}>
//       <CssBaseline/>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
