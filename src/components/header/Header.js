import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpg'
import './header.css'
import  {Card}  from './Card';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    // window.addEventListener("scroll", function () {
    //     const header = this.document.querySelector(".header")
    //     header.classList.toggle("active", this.window.scrollY > 100)
    //   })
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })


    return (
    <>
        <header className='header'>
            <div className='container  flex'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>
            <div className='nav'>
                <ul className={sidebar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => setSidebar(false)}>
                    <li>
                        <Link to='/home'>HomePages</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>Про нас</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Магазин</Link>
                    </li>
                    <li>
                        <Link to='/testimonialis'>Відгуки</Link>
                    </li>
                    <li> 
                        <Link to='/contact'>Контакти</Link>
                    </li>
                    <li className='icon '>
                        <FacebookIcon className='HeaderIcon'/>
                        <InstagramIcon className='HeaderIcon'/>
                        <Card className='HeaderIcon'/>
                    </li>
                </ul>
                </div>
                <button className='navbar-items-icon'  onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <CloseIcon /> : <MenuIcon />}
                </button>

            </div>
        </header>
    </>
  )
}

export default Header