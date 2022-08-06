import React from 'react';
import {Link} from 'react-router-dom'

import './footer.scss'

import logo from '../../images/logo.svg'

function Footer() {

    const menuItem = ['Features', 'Games', 'Marketplace', 'Team']
    let menuItemList = [];

    for(let i = 0; i < Math.ceil(menuItem.length / 2); i++)
    {
        menuItemList.push([])
    }

    menuItem.forEach((item, i ) =>{
        menuItemList[Math.floor(i/2)] = [...menuItemList[Math.floor(i/2)], item]
    })

    menuItemList = menuItemList.map(arrayItems => {
        return(
            <ul class="footer-menu">
            {arrayItems.map(item => <li class="footer-menu__item" key={item}><Link to={`/${item.toLowerCase()}`}>{item}</Link></li>)}
        </ul>
        )
    })

    return ( 

        <footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <div class="column">
            <Link to="/" className="footer__logo"><img src={logo} alt="logo"/></Link>
            </div>
            <div class="column">
                <div class="footer-list">
                    {[...menuItemList]}
                </div>
            </div>
        </div>
    </div>
</footer>

     );
}

export default Footer;