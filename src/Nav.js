import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleAboutClick = () => {
    navigate("/", { state: { scrollToAbout: true } });
  };

  return (
    <nav>
      <div className={`menu-toggle ${showMenu ? 'rotate' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar ${showMenu ? 'show active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#" onClick={handleAboutClick}>About</a></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
