import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useAnimationTitleOpacity } from '../../../hooks/useAnimationTitle';

import './modal.scss'

function Modal({children, active, setModal}) {

    const [animation] = useAnimationTitleOpacity();

    const modalActive = {
        opacity: 1,
        pointerEvents: 'all',
        overflow: 'hidden'
    }

    const modalUnactive={
        opacity: 0,
        pointerEvents: 'none',
        overflow: 'auto'
    }

    const modalContentActive = {
        transform: "scale(1)",
        pointerEvents: 'all'
    }

    const modalContentUnactive = {
        transform: "scale(0.5)",
        pointerEvents: 'none'
    }

    return ( 

        
            <motion.div
                className='modal'
                animate =   {active ? modalActive : modalUnactive}
                onClick={() => setModal(false)}
            >
                <motion.div 
                className='modal__content'
                animate =   {active ? modalContentActive : modalContentUnactive}
                >
                    {children}
                </motion.div>
            </motion.div>
     );
}

export default Modal;