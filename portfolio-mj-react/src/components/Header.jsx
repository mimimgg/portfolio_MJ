import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/"><img src="./images/logo.png" alt="로고" className="logo" /></Link>
          <nav className="gnb-wrap">
            <ul className="gnb" id="nav">
              <li><a href="#main__about">about</a></li>
              <li><a href="#main__portfolio">portfolio</a></li>
              <li><a href="#footer">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;