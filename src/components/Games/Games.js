import React, { useState } from 'react';
import { useAnimationTitle } from '../../hooks/useAnimationTitle';
import {motion} from 'framer-motion'
import ActiveGame from './ActiveGame/ActiveGame';

import './games.scss'

import game1 from './images/game-img-1.jpg'
import game2 from './images/game-img-2.jpg'
import game3 from './images/game-img-3.jpg'
import UnactiveGame from './UnactiveGames/UnactiveGame'
import ChangePage from '../UI/ChangePage/ChangePage';

function Games() {

    const [animationTitle] = useAnimationTitle();

    const [activeGame, setActiveGame] = useState({
        gameImg: game1,
        name: "Game 1",
        ganre: "Runner with elements of RPG Game 1",
        descriptionFirst:"Simple gameplay, fascinating lore, eye-catching design, and rewards that players can earn! Game 1",
        descriptionSecond: "On the one hand this is an endless runner. This genre is loved by hundreds of millions of players all over the world. On the another hand, now it’s getting even more exciting because of boss fights, weapons, armors, potions and much more. Game 1"
    });

    const [displayActiveGame, setDisplayActiveGame] = useState(true)

    const [unactiveGames, setUnactiveGames] = useState([
        {
            gameImg: game2,
            name: "Game 2",
            ganre: "Runner with elements of RPG Game 2",
            descriptionFirst:"Simple gameplay, fascinating lore, eye-catching design, and rewards that players can earn! Game 2",
            descriptionSecond: "On the one hand this is an endless runner. This genre is loved by hundreds of millions of players all over the world. On the another hand, now it’s getting even more exciting because of boss fights, weapons, armors, potions and much more. Game 2"
        }, 
        {
            gameImg: game3,
            name: "Game 3",
            ganre: "Runner with elements of RPG Game 3",
            descriptionFirst:"Simple gameplay, fascinating lore, eye-catching design, and rewards that players can earn! Game 3",
            descriptionSecond: "On the one hand this is an endless runner. This genre is loved by hundreds of millions of players all over the world. On the another hand, now it’s getting even more exciting because of boss fights, weapons, armors, potions and much more. Game 3"
        }
    ])

    

    const gameList = unactiveGames.map(item => <UnactiveGame 
        game = {item}
        changeGame = {changeActiveGame}
        activeGame = {activeGame}
        setDisplayActiveGame = {setDisplayActiveGame}
    />)


    function changeActiveGame(data){
        let unactiveGamesList = [...unactiveGames]
        unactiveGamesList = unactiveGamesList.map(item => {
            if(item.name === data.name)
                return activeGame
            return item
        }) 
        setUnactiveGames(unactiveGamesList)
        setActiveGame(data)
    }

    return ( 
    <ChangePage>
        <section class="games__section" id="games">
            <div class="container">
                <motion.div {...animationTitle} class="games__title"><span>H</span>olograph Games</motion.div>
                <div class="games__wrapper">
                <ActiveGame 
                game={activeGame} 
                display = {displayActiveGame}
                setDisplay = {setDisplayActiveGame}
                />
                    <div class="game-unactive__wrapper">
                        {[...gameList]}
                    </div>    
                </div>
            </div>
        </section>
    </ChangePage>
     );
}

export default Games;