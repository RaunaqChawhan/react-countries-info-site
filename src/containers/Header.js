import React from 'react';

const Header = () => (
    <header class="theme-selection">
        <div className="app-name">
          <h1>Where in the world?</h1>
          <div className="mode-shuffle" onClick={() => document.querySelector('body').classList.toggle('mode-toggle')}>
            <div className="moon"></div>
            <button>Dark Mode</button>
          </div>
        </div>
    </header>
)

export default Header;