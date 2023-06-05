import React, { useState } from 'react';
import {motion} from 'framer-motion'

function UnactiveGame({game, changeGame, setDisplayActiveGame}) {

    const [display, setDisplay] = useState(true)


    function dataToParent(){
        setDisplay(!display)
        setDisplayActiveGame(false)
        setTimeout(() => {
            changeGame(game)
            setDisplay((display) => setDisplay(!display))
            setDisplayActiveGame(true)
        }, 1200);
    }


    return ( 
        <div class="game-unactive" key={game.name} onClick={dataToParent}>
        <motion.div 
        initial={{opacity:0}}
        transition={{
            duration: 0.7,
            delay: 0.3
        }}
        animate={{
            opacity: display ? 1 : 0
        }}
        class="game-unactive__title"
        >
        {game.name}
        </motion.div>
        <motion.img 
        animate={{
            opacity: display ? 1 : 0
        }}
        initial={{opacity: 0}}
        src={game.gameImg} 
        alt={`${game.name}`} 
        class="game-unactive__image"
        transition={{
            duration: 0.7,
            delay: 0.3
        }}
        />
        <motion.div 
        initial={{
            backgroundColor: "#2f2f2f"
        }}
        animate={{
            // width: display ? "100%" : "0px",
            backgroundColor: display ? "#4e4e4e" : "#2f2f2f"
        }}
        transition={{
             delay:0.3,
            
            duration: 0.7
        }}
        class="game-unactive__line"
        ></motion.div>
        </div>
     );
}

export default UnactiveGame;