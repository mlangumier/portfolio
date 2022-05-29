import './App.scss';
import { RouterConfig } from 'Routes';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Merriweather Sans'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterConfig />
      </div>
    </ThemeProvider>
  );
}

export default App;
