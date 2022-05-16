import './App.css';
import axios from 'axios';
import Roulette from './components/Roulette';


function App() {
  const testAxios = () => {
    const data = new FormData();
    data.append("price_range", "$$");
    data.append("address", "83-33 118th St, Kew Gardens");
    axios.post("https://localtest.me:8000/recommendations", data);
  };
  return (
    <div className="App">
      <header className="header-img">
      </header>
      <Roulette></Roulette>
      <footer className="footer">
        <div class="footer-content">
          powered by BentoBandits
        </div>
      </footer>
    </div>
  );
}

export default App;
