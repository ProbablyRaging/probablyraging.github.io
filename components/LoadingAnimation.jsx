import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScreenContext } from './Layout';

export default function LoadingAnimation({ isLoading }) {
    const isSmallScreen = useContext(ScreenContext);
    const letters = ['Getting', 'things', 'ready'];

    if (isSmallScreen) {
        return (
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className='flex justify-center items-center absolute top-0 left-0 w-full h-full select-none bg-overlay z-[9999999999]'
                        exit={{ height: 0, transition: { duration: 0.8, delay: 0.8 } }}
                    >
                        <div className='flex justify-center items-center flex-col gap-6 w-[80%]'>
                            <div className='flex items-center gap-2.5 font-bold text-3xl overflow-hidden flex-wrap'>
                                <React.Fragment>
                                    <motion.span
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: 'spring', stiffness: 120, damping: 13, delay: 0.2 }}
                                        exit={{ y: -50, opacity: 0, transition: { duration: 0.2, delay: 0.2 } }}
                                    >
                                        Loading..
                                    </motion.span>
                                </React.Fragment>
                            </div>

                            <motion.div
                                className='w-[100%] h-[6px] bg-neutral-400 rounded-full'
                                exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            >
                                <motion.div
                                    className='h-[6px] bg-dazzle rounded-full'
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                                ></motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className='flex justify-center items-center absolute top-0 left-0 w-full h-screen select-none bg-overlay z-[9999999999]'
                    exit={{ height: 0, transition: { duration: 0.8, delay: 0.8 } }}
                >
                    <div className='flex justify-center items-center flex-col gap-6 m-auto'>
                        <div className='flex items-center gap-2.5 font-bold text-6xl h-[70px] overflow-hidden'>
                            <React.Fragment>
                                {letters.map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: 'spring', stiffness: 120, damping: 13, delay: (index / 10) + 0.2 }}
                                        exit={{ y: -50, opacity: 0, transition: { duration: 0.2, delay: (index / 10) + 0.2 } }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </React.Fragment>
                        </div>

                        <motion.div
                            className='w-full h-[6px] bg-neutral-400 rounded-full'
                            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.4 } }}
                        >
                            <motion.div
                                className='h-[6px] bg-dazzle rounded-full'
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                            ></motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
