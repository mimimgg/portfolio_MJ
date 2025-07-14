// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="로고" className="logo" />
          </Link>
          <nav className="gnb-wrap">
            <ul className="gnb" id="nav">
              <li>
                <a href="#main__about" onClick={handleSmoothScroll}>about</a>
              </li>
              <li>
                <a href="#main__portfolio" onClick={handleSmoothScroll}>portfolio</a>
              </li>
              <li>
                <a href="#footer" onClick={handleSmoothScroll}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
