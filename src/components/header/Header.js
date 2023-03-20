import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Close, Menu } from '@mui/icons-material';
import { Card } from './Card';
import logo from '../../assets/images/logo.jpg';
import './header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <img src={logo} alt="Logo" title="Logo" />
        </div>
        <nav className="nav">
          <ul className={isSidebarOpen ? 'nav-links-sidebar' : 'nav-links'} onClick={closeSidebar}>
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
        <div className='icon_header'>
          <ul>
            <li>
              <Facebook aria-label="Facebook" className="HeaderIcon" />
            </li>
            <li>
              <Instagram aria-label="Instagram" className="HeaderIcon" />
            </li>
            <li>
              <Card aria-label="Card" className="HeaderIcon" />
            </li>
          </ul>
        </div>
        <button className="navbar-items-icon" onClick={toggleSidebar} aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}>
          {isSidebarOpen ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
