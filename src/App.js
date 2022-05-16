import { useState } from 'react';

import Roulette from './components/Roulette';
import RecommendationsModal from './components/recommendations-modal/modal';

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onGoClickHandler = () => {
    setIsModalOpen(true);
  };
  const onHandleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="header-img">
      </header>
      <Roulette onGoClick={onGoClickHandler}></Roulette>
      <RecommendationsModal isOpen={isModalOpen} handleClose={onHandleClose}/>
      <footer className="footer">
        <div class="footer-content">
          powered by BentoBandits
        </div>
      </footer>
    </div>
  );
}

export default App;
