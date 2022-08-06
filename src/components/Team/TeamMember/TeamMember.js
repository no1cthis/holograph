import React from 'react';
import {motion} from 'framer-motion'


function TeamMember({name, position, description, picture, id, setModal, setModalId, init}) {
    return ( 
        <motion.div 
        initial={!init ? { opacity: 0, x:"1000px"} : null}
        animate={{opacity:1, x: "0px"}}
        transition={{
        duration: 1.2 - ((0.2*id+1>0) ? 0.2*id : 0.2) ,
        delay: 0.5*id
        }}
        class="team-item"
        onClick={() => {setModal(true); setModalId(id)}}
        >
                <div class="team-item__picture">
                    <img src={picture} alt="team member photo" class="team-item__picture-photo"/>
                </div>
                <div class="team-item__name">{name}</div>
                <div class="team-item__position">{position}</div>
                <div class="team-item__description">{description}</div>
        </motion.div>
     );
}

export default TeamMember;