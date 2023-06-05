import React, { useState } from 'react';
import {motion} from "framer-motion"

import './team.scss'
import TeamMember from './TeamMember/TeamMember';
import Modal from '../UI/Modal/Modal'

import teamMemberPhoto from './images/hero.png'
import { useAnimationTitleOpacity } from '../../hooks/useAnimationTitle';
import ChangePage from '../UI/ChangePage/ChangePage';

function Team() {

    const [modal, setModal] = useState(false);

    const [modalId, setModalId] = useState(0)

    const [team, setTeam] = useState([
        {
            id:0,
            name: 'Dalv Likavist1',
            position: 'CEO1',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        {
            id:1,
            name: 'Dalv Likavist2',
            position: 'CEO2',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        {
            id:2,
            name: 'Dalv Likavist3',
            position: 'CEO3',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        {
            id:3,
            name: 'Dalv Likavist4',
            position: 'CEO4',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        {
            id:4,
            name: 'Dalv Likavist5',
            position: 'CEO5',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        {
            id:5,
            name: 'Dalv Likavist6',
            position: 'CEO6',
            desciption: 'The semi-god who has a vision of bright future that awaits all of us.',
            picture: teamMemberPhoto
        },
        
    ]);

    const [animationTitle] = useAnimationTitleOpacity();

    const teamList = team.map(item =>   <TeamMember 
                                        key         = {item.name}
                                        name        = {item.name} 
                                        position    = {item.position}
                                        description = {item.desciption}
                                        picture     = {item.picture}
                                        id          = {item.id}
                                        setModal    = {setModal}
                                        setModalId  = {setModalId}
                                        />)



    return ( 
    <ChangePage>
            <section class="team" id="team">
                <div class="container">
                    <motion.div {...animationTitle}class="team__title"><span>T</span>eam</motion.div>

                    <div class="team-list">
                    {[...teamList]}
                    </div>
                </div>
            </section>

            
            <Modal setModal={setModal} active = {modal}>
                <TeamMember 
                    key         = {team[modalId].name}
                    name        = {team[modalId].name} 
                    position    = {team[modalId].position}
                    description = {team[modalId].desciption}
                    picture     = {team[modalId].picture}
                    id          = {team[modalId].id}
                    init
                />
            </Modal>
    </ChangePage>
     );
}

export default Team;