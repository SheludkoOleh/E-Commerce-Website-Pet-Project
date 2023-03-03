import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Card } from './Card';
import './header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav">
          <ul className={isSidebarOpen ? 'nav-links-sidebar' : 'nav-links'} onClick={handleSidebarClose}>
            <li>
              <Link to="/home">HomePages</Link>
            </li>
            <li>
              <Link to="/aboutus">Про нас</Link>
            </li>
            <li>
              <Link to="/shop">Магазин</Link>
            </li>
            <li>
              <Link to="/testimonialis">Відгуки</Link>
            </li>
            <li>
              <Link to="/contact">Контакти</Link>
            </li>
            </ul>
        </nav>
        <ul className={isSidebarOpen ? 'nav-links-sidebar' : 'nav-links'} onClick={handleSidebarClose}>
            <li className="icon">
              <FacebookIcon className="HeaderIcon" />
              <InstagramIcon className="HeaderIcon" />
              <Card className="HeaderIcon" />
            </li>
          </ul>
        
        <button className="navbar-items-icon" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
