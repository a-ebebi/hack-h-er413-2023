import './App.css'

import { useState } from 'react';
import './Landing.css';
import Home from './Home';
import About from './About';
import AllFarms from './AllFarms';
import FarmersMarket from './data/FarmersMarket';
import OnFarmMarket from './data/OnFarmMarket';
import FoodHub from './data/FoodHub';

function Landing(props) {
  const [activePage, setActivePage] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <header>
        <nav  id ="header1">
          <ul>
            <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
              Home
            </li>
            <li className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>
              About
            </li>
            <li className={activePage === 'products' ? 'active' : ''} onClick={() => handlePageChange('products')}>
              Directories as Grid
            </li>
            <li className="dropdown">
              <span className={activePage === 'directories' ? 'active' : ''} onClick={toggleMenu}>
                Directories as List
              </span>
              {showMenu && (
                <ul className="dropdown-menu">
                  <li onClick={() => handlePageChange('Food-Hub')}>Food Hub</li>
                  <li onClick={() => handlePageChange('On-Farm-Market')}>
                    On Farm Market
                  </li>
                  <li onClick={() => handlePageChange('Farmers-Market')}>Farmers Market</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activePage === 'home' && (
          <Home />
        )}
        {activePage === 'about' && (
          <About />
        )}
        {activePage === 'products' && (
          <AllFarms />
        )}
        {activePage === 'Food-Hub' && (
          <FoodHub />
        )}
        {activePage === 'On-Farm-Market' && (
          <OnFarmMarket />
        )}
        {activePage === 'Farmers-Market' && (
          <FarmersMarket />
        )}
      </main>
      <footer id="footer1">
        <p>&copy; 2023 My Sustainable Food Company</p>
      </footer>
    </div>
  );
}

export default Landing;