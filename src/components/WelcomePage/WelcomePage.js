import React from 'react';

import './welcomePage.scss'

import bgImage from './images/bg-1.png';
import Button from '../UI/Button/Button';
import ChangePage from '../UI/ChangePage/ChangePage';

function WelcomePage() {

    const buttonLink = "#learnMore"

    const title = 'Holo Gaming Multiverse Based On Play-To-Earn Cryptoeconomy';
    const subtitle = 'Welcome to the Holograph P2E multiverse – a unique world of the NFT gaming trilogy where battles and adventures happen every day! ';
    const buttonText = 'Learn more'

    return ( 
    <ChangePage>
        <section class="welcome-page-section">
            <div class="welcome-page">
                    <div class="column-1">
                        <div class="welcome-page__title">
                            {title}
                        </div>

                        <div class="welcome-page__play">
                            Play. Have fun. Earn
                        </div>

                        <div class="welcome-page__subtitle">
                            {subtitle}
                        </div>
                        
                        <div className="welcome-page__button">
                        <Button link={buttonLink}>{buttonText}</Button>
                        </div>
                    </div>


                    <div class="column-2">
                        <img src={bgImage} alt="bg-welcome-page"/>
                    </div>
            </div>
        </section>
    </ChangePage>
     );
}

export default WelcomePage;