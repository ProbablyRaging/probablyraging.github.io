import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function Footer() {
    const isSmallScreen = useContext(ScreenContext);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], ['1', '0']);

    if (!isSmallScreen) {
        return (
            <motion.div
                className='flex items-end flex-col items fixed bottom-0 left-0 m-4 select-none bg-glass p-2 rounded-lg'
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                style={{ opacity }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0,
                }}
            >
                <p className='font-bold text-[35px] leading-[35px]'>
                    PROBABLY
                </p>

                <p className='font-bold text-[30px] text-dazzle leading-[35px]'>
                    RAGING.DEV
                </p>
            </motion.div>
        )
    }
}