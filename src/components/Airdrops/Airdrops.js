import React, { useEffect, useRef, useState } from 'react';

import {motion, useAnimationControls, useInView} from 'framer-motion'

import "./airdrops.scss"
import coins from "./images/coins.png"
import ChangePage from '../UI/ChangePage/ChangePage';

function Airdrops() {

    const [initAnim, setInitAnim] = useState(false)


    const ref = useRef(null);
    const IsInView = useInView(ref)

    const animX = useAnimationControls();
    const animOpacity = useAnimationControls();

    useEffect(()=>{
        if(!initAnim&&IsInView){
        animX.start({
            transition: { duration: 1 , delay: 0.3 },
            x: [-300 ,0],
            opacity:[0,1]
        })
        animOpacity.start({
            opacity: 1,
            transition: { duration: 3 , delay: 0.3 },
        })
        setInitAnim(true)
    }
    },[IsInView])

    return ( 
    <ChangePage>
        <section class="airdrop">
            <div class="container">
                    <div class="airdrop__wrapper">
                        <div class="column">
                            <motion.img animate={animOpacity} style={{opacity:0}}  ref={ref} src={coins} alt="coins" class="coins"/>
                        </div>
                        <div class="column">
                            <motion.div animate={animX} class="airdrop-title"><span>A</span>irdrop</motion.div>
                            
                                <motion.div animate={animX} class="airdrop-description">
                                    <span>Participate in the Holograph Airdrop</span> to become a part of our amazing community!
                                </motion.div>
                                <motion.a animate={animOpacity} href="#!" class="airdrop-button">Start Airdrop Bot</motion.a>
                            <motion.div animate={animX}>
                                <div class="airdrop-task">Complete simple tasks, invite friends and earn rewards:</div>
                                <div class="airdrop-rewards">$10,000 worth of $HOLO tokens for 1,000 participants</div>
                            </motion.div>
                        </div>
                    </div>
            </div>
        </section>
    </ChangePage>
     );
}

export default Airdrops;