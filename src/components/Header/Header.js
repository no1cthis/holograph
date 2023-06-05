import React from "react";
import {Link} from 'react-router-dom'

import './header.scss'

import logo from '../../images/logo.svg'
import Button from "../UI/Button/Button";

function Header () {
    const buttonLink = '#ds'

    return ( 
                
    <header class="header">
        <div class="container-header">
            <div class="header__wrapper">
                <Link to="/holograph" className="header__logo"><img src={logo} alt="logo"/></Link>
                <nav class="menu">
                    
                    <ul class="menu__list">
                        <li class="menu__list-item"><Link to="features">Features</Link></li>
                        <li class="menu__list-item"><Link to="/games">Games</Link></li>
                        <li class="menu__list-item"><Link to="/team">Team</Link></li>
                        <li class="menu__list-item"><Link to="/marketplace">Marketplace</Link></li>
                        <li class="menu__list-item"><Link to="/tokenomics">Tokenomics</Link></li>
                        <li class="menu__list-item"><Button link={buttonLink}>Join Discord</Button></li>  
                    </ul>
                </nav>
            </div>
        </div>
    </header>
     );
}

export default Header ;