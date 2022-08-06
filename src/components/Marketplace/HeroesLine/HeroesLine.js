import React, { useState } from 'react';
import HeroCard from '../../HeroCard/HeroCard';

import hero from "./images/hero.png"
import gear from "./images/gear.png"
import Modal from '../../UI/Modal/Modal';

function HeroesLine() {

    const [modal, setModal] = useState(false)

    const [modalId, setModalId] = useState(0)

    const [heroes, setHeroes] = useState([
        {
            id:0,
            rarity: "Epic 1",
            name: 'Elf 1',
            picture: hero,
            gear: gear
        },
        {
            id:1,
            rarity: "Epic 2",
            name: 'Elf 2',
            picture: hero,
            gear: gear
        },
        {
            id:2,
            rarity: "Epic 3",
            name: 'Elf 3',
            picture: hero,
            gear: gear
        },
        
        
    ])

    const heroesList = heroes.map(item => <HeroCard 
        setModal = {setModal} 
        setModalId = {setModalId} 
        key={item.id}
        rarity={item.rarity} 
        name={item.name} 
        picture={item.picture} 
        gear={item.gear} 
        id={item.id}
    />)

    return ( <div class="heroes-line">

    {[...heroesList]}
    <Modal setModal = {setModal} active = {modal}>
        <HeroCard key={`modal ${heroes[modalId].id}`}
        rarity  ={heroes[modalId].rarity} 
        name    ={heroes[modalId].name} 
        picture ={heroes[modalId].picture} 
        gear    ={heroes[modalId].gear} 
        id      ={heroes[modalId].id}
        init
        />
    </Modal>
    </div> );
}

export default HeroesLine;