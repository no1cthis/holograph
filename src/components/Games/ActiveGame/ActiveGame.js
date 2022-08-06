import React, {useRef} from 'react';
import {motion} from 'framer-motion'




function ActiveGame({game, visiable, setVisiable, display}) {


    const refImg = useRef()

    const {name, gameImg, ganre, descriptionFirst, descriptionSecond} = game;

    return ( 
        <div class="game-active">
            <div class="game-active__inner">
                <motion.img
                ref={refImg}
                initial ={{
                    opacity: 0,
                }}
                animate = {{
                    opacity: display ? 1 : 0, 
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.3
                }}
                src={gameImg}
                alt="game image"
                class="game-active__image"/>
                <motion.div 
                initial ={{
                    width: "0px",
                    opacity: 0
                }}
                animate={{
                    width: display ? "100%" : "0px",
                    opacity: display ? 1 : 0
                }}
                transition = {{
                    duration: 1
                }}
                class="game-active__text"
                >
                        <div
                        onClick={()=>setVisiable(!visiable)} 
                        class="game-active__title"
                        >
                            {name}
                        </div>
                        <div class="game-active__blue-block">{ganre}</div>
                        <div class="game-active__description--blue">
                            {descriptionFirst}
                        </div>
                        <div class="game-active__description">
                            {descriptionSecond}
                        </div>
                </motion.div>
                
            </div>
        <motion.div
        initial={{
            width: `${0}px`,
            backgroundColor: "#2f2f2f",
        }}
        animate={{
            width: display ? "100%" : `${parseInt(window.getComputedStyle(refImg.current).width)+50}px`,    
            backgroundColor: display ? "#1530A4" : "#2f2f2f",   
        }}

        transition={{
            duration: 1
        }}
        class="game-active__line"></motion.div>
        </div>
     );
}

export default ActiveGame;