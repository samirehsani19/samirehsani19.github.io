import {Outlet, Link} from 'react-router-dom';
import './Layout.css';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceSmile, faBars} from '@fortawesome/free-solid-svg-icons';

function HandleBarsMenu(){
    // $('.topbar-content').css('display', 'flex');
    $('.topbar-content').fadeToggle(500);
}

function Layout(){
    return (
        <>
            <nav className='topbar'>
                <div className='topbar-title'>
                    <li className='logoContainer'>
                        SAMIR EHSANI <FontAwesomeIcon icon={faFaceSmile} className='smileIcon'/>
                    </li>
                    <FontAwesomeIcon className='bars' icon={faBars} onClick={HandleBarsMenu}></FontAwesomeIcon>
                    <div className='topbar-content'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
};

export default Layout;