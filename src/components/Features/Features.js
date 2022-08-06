import React from 'react';
import {motion} from 'framer-motion'
import {useAnimationTitle} from '../../hooks/useAnimationTitle'

import './features.scss'

import phoneFrame from './images/phone-frame3.png'
import ChangePage from '../UI/ChangePage/ChangePage';

function Features() {

    const [animationSubtitle] = useAnimationTitle()

    const animationPhone = {
        initial:{opacity: 0, y:-1000},
        animate:{opacity: 1, y:0},
        transition:{duration: 1, delay:1}
    }

    let arrayList = [{
        title: 'Multiple Games',
        subtitle: 'Equilibrium consists of several games that use the same NFT assets. Earn tokens and NFTs in one game and then use them in another game of our multiverse.'
    },
    {
        title: "Play and Earn",
        subtitle: "Our games are free to play. While you play, you can earn rewards. Not just in-game rewards. They are rewards that can be turned into real money!"
    },
    {
        title: "Traditional Gameplay",
        subtitle: "We take familiar games and bring the best of blockchain technology and business models to them. Equilibrium games are easy and fun to play. "
    }]

    console.log(arrayList)

    arrayList = arrayList.map((item, i) => {
        return(<>
            <motion.li
                    initial={{
                        y: "-50px",
                        opacity: 0
                    }}
                    animate={{
                        y: "0px",
                        opacity: 1
                    }}
                    transition= {{
                        type: 'easy',
                        delay: 1 + 0.3*i,
                        duration: 0.2
                    }}
                    class="features__list__title star"
                    key={i}
                    >{item.title}</motion.li>
                <motion.p {...animationSubtitle}  class="features__list__description">
                        {item.subtitle}
            </motion.p>
        </>)
    })

    console.log(arrayList)


    return ( 
    <ChangePage>    
        <section class="features-section" id="features">
            <div class="container">
                <div class="features__wrapper">
                    <div className="features__text">
                    <motion.h2 {...animationSubtitle} class="features__title"><span>F</span>eatures</motion.h2>

                        <ul class="features__list">
                            {[...arrayList]}
                        </ul>
                    </div>
                    <motion.div {...animationPhone} className="phone">
                    <iframe className='phone__video' type="text/html"
                            src="https://www.youtube.com/embed/fg22WYXf2cI?autoplay=1&muted=1&start=1&loop=1&playlist=fg22WYXf2cI"
                            allow="autoplay" xframeborder="0" allowfullscreen/>
                        <img className='phone__frame' src={phoneFrame} alt=""/>
                        </motion.div>
                
                </div>
            </div>
        </section>
    </ChangePage>
     );

}

export default Features;