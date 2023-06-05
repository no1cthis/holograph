import React, { useState } from 'react';
import HeroesLine from './HeroesLine/HeroesLine';
import {AnimatePresence, motion} from 'framer-motion'

import './marketplace.scss'
import { useAnimationTitle, useAnimationTitleOpacity } from '../../hooks/useAnimationTitle';
import ChangePage from '../UI/ChangePage/ChangePage';
import Modal from '../UI/Modal/Modal';

import '../UI/Modal/modal.scss'

function Marketplace() {

    const [animationTitle] = useAnimationTitleOpacity(2);

    const [animateSubtitle] = useAnimationTitle()

    let proposeText = [`NFT leasing`, 'Fixed price sale or auction', 'Gas free transactions']




    proposeText = proposeText.map((item, i) => {
        return(
            <>
                    <li 
                    class="propose__text-item"
                    >
                        {item}
                    </li>
            </>

        )
    })
   
    return ( 
    <ChangePage>    
        <section class="marketplace" id="marketplace">
            <div class="container">
                <div class="marketplace__wrapper">
                    <motion.div {...animationTitle} class="marketplace__title"> <span>NFT</span>Marketplace</motion.div>

                    <div class="propose">
                        <ul class="propose__text">
                            {proposeText}
                        </ul>
                    </div>

                    <motion.div {...animateSubtitle} class="marketplace__subtitle"><span>Heroes, weapons, armors</span> – <br/>buy and sell to bring more fun into the game! </motion.div>
                    <HeroesLine/>
                </div>
            </div>
        </section>
    </ChangePage>
     );
}


export default Marketplace;