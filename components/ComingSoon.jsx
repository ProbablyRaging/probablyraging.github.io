import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function ComingSoon() {
    const isSmallScreen = useContext(ScreenContext);

    if (isSmallScreen) {
        return (
            <div id='projects' className='relative flex flex-col h-fit'>
                <div className='absolute top-0 right-0 my-10 mr-6'>
                    <p className='flex flex-col font-yaro-black text-[40px] uppercase'>
                        Coming
                        <span>Soon..</span>
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div id='projects' className='h-screen'>
            <div className='relative'>
                <div className='flex justify-center items-center h-screen'>
                    <motion.p
                        className='flex flex-col absolute top-0 right-0 font-yaro-black text-[100px] uppercase mt-28 mr-20 leading-[100px]'
                        initial={{ x: 400, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 650,
                            damping: 100,
                            delay: 0,
                        }}
                    >
                        Coming
                        <span>Soon..</span>
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
