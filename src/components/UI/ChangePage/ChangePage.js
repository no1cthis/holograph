import { motion } from 'framer-motion';
import React from 'react';


function ChangePage({children}) {

    const initial={
        opacity:0
    }

    const animate={
        opacity:1
    }

    const exit ={
        opacity:0
    }
    
    return ( 

        <motion.div initial={initial} animate = {animate} transition={{duration:1}} exit={exit}>
            {children}
        </motion.div>
     );
}

export default ChangePage;