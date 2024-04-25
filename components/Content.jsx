import React, { useEffect, useContext } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function Content() {
    const isSmallScreen = useContext(ScreenContext);
    const count = useMotionValue(2010);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 2019, { duration: 3 });
        return animation.stop;
    }, []);

    const handleScrollClick = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    if (isSmallScreen) {
        return (
            <div className='flex flex-col items-center h-full pt-20'>
                <div className='flex flex-col items-center'>
                    <span className='font-yaro-black text-[70px] leading-[70px]'>
                        MAKING
                    </span>
                    <span className='font-yaro-black text-[70px] leading-[70px] text-dazzle font-stroke'>
                        GOOD
                    </span>
                    <span className='font-yaro-black text-[70px] leading-[70px] text-dazzle font-stroke'>
                        SHIT
                    </span>
                    <span className='font-yaro-black text-[70px] leading-[70px]'>
                        SINCE
                    </span>
                    <motion.span className='font-yaro-black text-[70px] leading-[70px]'>
                        {rounded}
                    </motion.span>
                </div>

                <div className='absolute bottom-32 left-50 cursor-pointer' onClick={handleScrollClick}>
                    <div className='flex justify-center w-[30px] h-[70px] border-4 border-neutral-300 rounded-full'>
                        <motion.div
                            className='w-[10px] h-[40px]'
                            initial={{ y: '10%', opacity: 1, scale: 1 }}
                            animate={{ y: '100%', opacity: [1, 1, 0], scale: [1, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                        >
                            <div className='w-[10px] h-[10px] bg-dazzle rounded-full'></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col items-center'>
                <span className='font-yaro-black text-[100px] leading-[90px]'>
                    MAKING
                </span>
                <span className='font-yaro-black text-[100px] leading-[90px] text-dazzle font-stroke'>
                    GOOD
                </span>
                <span className='font-yaro-black text-[100px] leading-[90px] text-dazzle font-stroke'>
                    SHIT
                </span>
                <span className='font-yaro-black text-[100px] leading-[90px]'>
                    SINCE
                </span>
                <motion.span className='font-yaro-black text-[100px] leading-[90px]'>
                    {rounded}
                </motion.span>
            </div>

            <div className='absolute bottom-32 left-50 cursor-pointer' onClick={handleScrollClick}>
                <div className='flex justify-center w-[30px] h-[70px] border-4 border-neutral-300 rounded-full'>
                    <motion.div
                        className='w-[10px] h-[40px]'
                        initial={{ y: '10%', opacity: 1, scale: 1 }}
                        animate={{ y: '100%', opacity: [1, 1, 0], scale: [1, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    >
                        <div className='w-[10px] h-[10px] bg-dazzle rounded-full'></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}