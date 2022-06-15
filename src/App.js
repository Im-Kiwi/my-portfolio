import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

// ------- importing from other files ----------
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
