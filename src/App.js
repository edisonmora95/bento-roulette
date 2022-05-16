import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Button from '@mui/material/Button';

function App() {
  const testAxios = () => {
    const data = new FormData();
    data.append("price_range", "$$");
    data.append("address", "83-33 118th St, Kew Gardens");
    axios.post("https://localtest.me:8000/recommendations", data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={testAxios}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
