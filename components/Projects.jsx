import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function Projects() {
    const isSmallScreen = useContext(ScreenContext);

    if (isSmallScreen) {
        return (
            <div id='projects' className='relative flex flex-col h-full bg-dazzle'>
                <div className='font-yaro-black text-[40px] mt-10 ml-10'>
                    <div className='relative'>
                        <span className='absolute top-0'>
                            PROJECTS.
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='projects' className='relative flex flex-col h-full bg-dazzle'>
            <div className='font-yaro-black text-[100px] mt-28 ml-20'>
                <motion.div
                    className='relative'
                    initial={{ x: -999, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 650,
                        damping: 100,
                        delay: 0,
                    }}
                >
                    <span className='absolute top-0'>
                        PROJECTS.
                    </span>
                </motion.div>
            </div>
        </div>
    )
}