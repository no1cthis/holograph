import React, { useState } from 'react';

import './partners.scss'

import partner1 from './images/partner-logo-1.svg'
import partner2 from './images/partner-logo-2.svg'
import partner3 from './images/partner-logo-3.svg'
import ChangePage from '../UI/ChangePage/ChangePage';

function Partners() {

    const [partners, setPartners] = useState([partner1,partner2,partner3 ])

    const partnersList = partners.map(item => {
        return(
            <img src={item} alt="partner logo" class="partner-image"/>
        )
    })

    return ( 
    <ChangePage>
        <section class="partners">
            <div class="container">
                <div class="partners-title"><span>P</span>artners</div>

            <div class="partners__list">
                {[...partnersList]}
            </div>

            </div>
        </section>
    </ChangePage>

     );
}

export default Partners;