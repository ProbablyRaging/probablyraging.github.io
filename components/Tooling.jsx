import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function Tooling() {
    const isSmallScreen = useContext(ScreenContext);

    if (isSmallScreen) {
        return (
            <div className='relative flex flex-col h-full'>
                <div className='font-yaro-black text-[40px] mt-10 mr-10'>
                    <div className='relative'>
                        <span className='absolute top-0 right-0'>
                            TOOLING.
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='relative flex flex-col h-full overflow-hidden'>
            <div className='font-yaro-black text-[100px] mt-28 mr-20'>
                <motion.div
                    className='relative'
                    initial={{ x: 999, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 650,
                        damping: 100,
                        delay: 0,
                    }}
                >
                    <span className='absolute top-0 right-0'>
                        TOOLING.
                    </span>
                </motion.div>
            </div>
        </div>
    )
}