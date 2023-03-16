import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ImArrowRight2 } from 'react-icons/im';

import './footer.css'

function Footer() {
  return (
    <div className='footer_header'>
        <div className='footer_inside'>
            <div className='banner_section'>
                <div className="logo">
                    <img src={logo} alt="" />
                 </div>
                 <div className='banner_text'>
                    <p>We produce handmade soap from cold-pressed olive oil, coconut oil, and cocoa butter. Each of our soap bars is an extensive source of vitamin E and antioxidants. Turn your routine washing-up into a pleasant ritual.</p>
                 </div>
                 <div className='banner_icon'>
                    <FacebookIcon className="FooterIcon" />
                    <InstagramIcon className="FooterIcon" />
                 </div>
            </div>
            <div className='contact_section'>
                <nav className='nav_footer'>
                    <h1 className='title_footer'>Navigation.</h1>
                    <ul>
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
                <div className='contacts_inside'>
                    <h1 className='title_footer'>Contacts.</h1>
                    <p className='mail'>
                        <span className='email_inside'>E-mail</span>
                        <p className='email_adres'>purity@email.com</p>
                    </p>
                    <p className='phone_section'>
                        <span className='phone_inside'>Phone</span>
                        <p className='phone_number'>+1 (234) 567 89 00</p>
                    </p>
                    <p className='adress_section'>
                        <span className='adress_inside'>Adress</span>
                        <p  className='adress_number'>889 Lexington Ave, New York</p>
                    </p>
                </div>
            </div>

            <div className='subscribe_section'>
                <h4 className='subscribe_text'>Subscribe to receive our special offers.</h4>
                <form>
                    <input type="email" id="fname" name="fname" placeholder='Email'/>
                </form>
                <button className='button_subscribe'>
                    <span>Додати до кошика</span>

                        <ImArrowRight2 />
                    
                  </button>
            </div>
        </div>
    </div>
    
  )
}

export default Footer