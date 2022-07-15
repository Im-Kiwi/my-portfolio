import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { customTheme } from './theme/createTheme'
import { ThemeProvider } from '@mui/material'

// ------- importing from other files ----------
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme = {customTheme}>
          <Layout />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
