import React from 'react';

import { motion } from 'framer-motion'

import './heroCard.scss'

function HeroCard({ rarity, picture, gear, name, id, setModal, setModalId, init }) {
    return (
        <motion.div
            initial={!init ? { opacity: 0, x: "-1000px" } : null}
            animate={{ opacity: 1, x: "0px" }}
            transition={{
                duration: 1 - ((0.2 * id + 1 > 0) ? 0.2 * id : 0.2),
                delay: (0 + (0.5 * id))
            }}
            className="hero"
            onClick={() => { setModal(true); setModalId(id) }}>


                <div class="hero__rarity">
                    <div class="hero__rarity-text">
                        {rarity}
                    </div>
                </div>


                <div class="hero__picture">
                    <img src={picture} alt="hero" class="hero__picture-img" />
                </div>


                <motion.div
                    initial={!init ? { opacity: 0, } : null}
                    animate={{ opacity: 1, }}
                    transition={{
                        duration: 1.2 - ((0.2 * id + 1 > 0) ? 0.2 * id : 0.2),
                        delay: 2
                    }}
                    class="hero__gear"
                >
                    <img src={gear} alt="hero gear" class="hero__gear-img" />
                </motion.div>

                
                <div class="hero__name">{name}</div>
        </motion.div>
    );
}

export default HeroCard;