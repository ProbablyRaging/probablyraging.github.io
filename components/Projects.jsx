import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScreenContext } from './Layout';
import { projects, projectsMobile } from '@/contants';

export default function Projects() {
    const isSmallScreen = useContext(ScreenContext);
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, [0, 1], ['45%', '25%']);

    if (isSmallScreen) {
        return (
            <div id='projects' className='relative flex flex-col h-fit bg-dazzle'>
                <div className='my-10 ml-6'>
                    <p className='flex flex-col font-yaro-black text-[40px] uppercase'>
                        Projects
                        <span>& Tooling.</span>
                    </p>
                </div>

                <div className='flex justify-center items-center gap-4 flex-wrap relative p-8'>
                    {projectsMobile.map((project, index) => (
                        <div key={project.name} className={`relative object-contain overflow-hidden duration-150 rounded-lg`}>
                            <Image src={project.image} width={450} height={500} alt='' />

                            <div className='flex justify-between items-center flex-col absolute inset-0 bg-black bg-opacity-60 p-4 text-white text-lg font-medium'>
                                <div className='leading-5 text-center'>
                                    <p className='flex justify-center font-yaro-black text-xl uppercase mb-4'>{project.name}</p>
                                </div>

                                <div className='flex justify-center flex-wrap gap-4'>
                                    {project.langs && project.langs.map((lang) => (
                                        <React.Fragment key={`langmob-${project.name}`}>
                                            {lang}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className='flex gap-4'>
                                    {project.github && (
                                        <Link href={project.github} target='_blank'>
                                            <div className='font-semibold text-sm bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-md duration-150'>
                                                View on GitHub
                                            </div>
                                        </Link>
                                    )}
                                    {project.cws && (
                                        <Link href={project.cws} target='_blank'>
                                            <div className='font-semibold text-sm bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-md duration-150'>
                                                View on CWS
                                            </div>
                                        </Link>
                                    )}
                                    {project.discord && (
                                        <Link href={project.discord} target='_blank'>
                                            <div className='font-semibold text-sm bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-md duration-150'>
                                                Join on Discord
                                            </div>
                                        </Link>
                                    )}
                                    {project.website && (
                                        <Link href={project.website} target='_blank'>
                                            <div className='font-semibold text-sm bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-md duration-150'>
                                                View Website
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div id='projects' className='h-screen bg-dazzle'>
            <div className='relative'>
                <div className='flex justify-center items-center h-screen'>
                    <motion.p
                        className='flex flex-col absolute top-0 left-0 font-yaro-black text-[100px] uppercase mt-28 ml-20 leading-[100px]'
                        initial={{ x: -400, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 650,
                            damping: 100,
                            delay: 0,
                        }}
                    >
                        Projects
                        <span>& Tooling.</span>
                    </motion.p>

                    <motion.div style={{ x }} className='flex gap-4 flex-wrap w-[1500px]'>
                        {projects.map((project, index) => (
                            <div key={project.name} className={`relative object-contain overflow-hidden duration-150 rounded-lg ${index === 2 ? 'ml-28' : ''}`}>
                                <Image src={project.image} width={500} height={500} alt='' />

                                <div className='absolute inset-0 bg-black bg-opacity-60 p-8 flex justify-between items-center flex-col text-white text-lg font-medium'>
                                    <div className='leading-5'>
                                        <p className='flex justify-center font-yaro-black text-3xl uppercase mb-4'>{project.name}</p>
                                        <p>{project.description}</p>
                                    </div>

                                    <div className='flex gap-4'>
                                        {project.langs && project.langs.map((lang) => (
                                            <React.Fragment key={`lang-${project.name}`}>
                                                {lang}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    <div className='flex gap-4'>
                                        {project.github && (
                                            <Link href={project.github} target='_blank'>
                                                <div className='font-semibold bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-md duration-150'>
                                                    View on GitHub
                                                </div>
                                            </Link>
                                        )}
                                        {project.cws && (
                                            <Link href={project.cws} target='_blank'>
                                                <div className='font-semibold bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-md duration-150'>
                                                    View on CWS
                                                </div>
                                            </Link>
                                        )}
                                        {project.discord && (
                                            <Link href={project.discord} target='_blank'>
                                                <div className='font-semibold bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-md duration-150'>
                                                    Join on Discord
                                                </div>
                                            </Link>
                                        )}
                                        {project.website && (
                                            <Link href={project.website} target='_blank'>
                                                <div className='font-semibold bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-md duration-150'>
                                                    View Website
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}