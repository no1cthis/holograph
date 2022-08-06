import React from 'react';

import './tokenomics.scss'
import diagram from './diagram.png'
import ChangePage from '../UI/ChangePage/ChangePage';

function Tokenomics() {
    return ( 
    <ChangePage>
        <section class="tokenomics" id="tokenomics">

            <div class="container">
                <div class="tokenomics-title">
                    <span>T</span>oken <span>E</span>conomy
                </div>
            
                <div class="tokenomics-subtitle">
                    Holograph will be powered by two tokens: MDS and HOLO. 
                </div>
            
                <div class="description">
                    <div class="description__left">
                        The <span>MDS</span> token is the in-game currency, which can be used by players to purchase NFTs of digital in-game assets. 
                    </div>
                
                    <div class="line"></div>

                    <div class="description__right">
                        The <span>HOLO</span> token is the governance token where holders can impact the decision-making related to the Equilibrium policies and development.
                
                    </div>
                </div>

                <img src={diagram} alt="diagram" class="diagram"/>


            </div>

        </section>
    </ChangePage>
     );
}

export default Tokenomics;