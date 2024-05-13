import React from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Content() {
    return (
        <React.Fragment>
            <div className='flex justify-center items-center h-full min-h-screen'>
                <div className='flex justify-center items-center flex-col'>
                    <motion.p
                        className='layered-sm font-black text-dazzle select-none text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl'
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2,
                        }}
                    >
                        ProbablyRaging.
                    </motion.p>
                    <motion.div
                        className='flex items-center gap-10 text-alt mt-28 text-4xl md:text-5xl lg:text-6xl'
                        initial={{ y: 500 }}
                        animate={{ y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 23,
                            delay: 0.5,
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: .1,
                                type: 'spring',
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <Link href={'https://github.com/probablyraging'} target='_blank'>
                                <FaGithub />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: .1,
                                type: 'spring',
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <Link href={'https://discord.com/users/438434841617367080'} target='_blank'>
                                <FaDiscord />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: .1,
                                type: 'spring',
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <Link href={'mailto:probablyraging@gmail.com'} target='_blank'>
                                <SiGmail />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </React.Fragment>
    )
}