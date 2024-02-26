import React, { useState, useEffect } from 'react';
import { MaskContainer } from '../components/ui/svg-mask-effect';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { SiGithub, SiDiscord, SiGmail } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

const Page = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 930);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const main = [
        {
            text: `Hey,`
        },
        {
            text: "I'm",
        },
        {
            text: "ProbablyRaging",
            className: "text-black dark:text-black",
        }
    ];

    return (
        <React.Fragment>

            {!isSmallScreen ? (
                <MaskContainer className="h-full border rounded-md">
                    <div className='flex flex-col items-center gap-4 min-w-[500px]'>
                        <div className='flex flex-col justify-between gap-4'>
                            <div className='flex flex-row items-center gap-8'>
                                <SiGithub className='w-[36px] h-[36px]' />
                                <a href='https://github.com/probablyraging' target='_blank' rel='external noopener noreferrer' className='hover:text-blue-500'>
                                    Github
                                </a>
                            </div>
                            <div className='flex flex-row items-center gap-8'>
                                <SiDiscord className='w-[36px] h-[36px]' />
                                <a href='https://discord.com/users/438434841617367080' target='_blank' rel='external noopener noreferrer' className='hover:text-blue-500'>
                                    Discord
                                </a>
                            </div>
                            <div className='flex flex-row items-center gap-8'>
                                <SiGmail className='w-[36px] h-[36px]' />
                                <a href='mailto:probablyraging@gmail.com' target='_blank' rel='external noopener noreferrer' className='hover:text-blue-500'>
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </MaskContainer>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#2fcdcd] text-white">
                    <div className='flex flex-col gap=0'>
                        <motion.div className="max-w-4xl m-0 text-white text-center text-2xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            Hey, I'm <span className='text-black'>ProbablyRaging</span>
                        </motion.div>
                        <motion.p className="text-[14px] m-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                            Hobbyist Developer
                        </motion.p>
                    </div>

                    <motion.div className='flex flex-row justify-between gap-10 mt-[10%]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        <a href='https://github.com/probablyraging' target='_blank' rel='external noopener noreferrer'>
                            <SiGithub className='w-[28px] h-[28px] text-black' />
                        </a>
                        <a href='https://discord.com/users/438434841617367080' target='_blank' rel='external noopener noreferrer'>
                            <SiDiscord className='w-[28px] h-[28px] text-black' />
                        </a>
                        <a href='mailto:probablyraging@gmail.com' target='_blank' rel='external noopener noreferrer'>
                            <SiGmail className='w-[28px] h-[28px] text-black' />
                        </a>
                    </motion.div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Page;