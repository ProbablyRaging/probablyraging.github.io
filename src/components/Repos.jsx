import React, { useState, useEffect } from 'react';
import axios from "axios";
import { motion } from 'framer-motion';

const Repos = () => {
    const [pinnedRepos, setPinnedRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://creatordiscord.xyz/api/ghrepos')
            .then((response) => {
                setPinnedRepos(response.data.repos.data.user.pinnedItems.nodes);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching pinned repos:", error);
            });
    }, []);

    return (
        <div className='flex justify-center items-center w-[95%]'>
            <div className='grid w-full grid-cols-2 sm:grid-cols-1 gap-2 mb-4 smup:mb-10'>
                {pinnedRepos.map((repo, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.9 }}>
                        <a href={`https://github.com/probablyraging/${repo.name}`} target='_blank' rel='external noopener noreferrer' className='no-underline'>
                            <div className='flex min-h-[84px] flex-col rounded-xl bg-[#1a1a1a] bg-opacity-80'>
                                <div className='flex gap-2 items-center no-underline h-4 hover:underline mt-4 mr-4  ml-4'>
                                    <img src="https://avatars.githubusercontent.com/u/24839609?v=4" width={'20'} height={'20'} loading='lazy' alt="" />
                                    <p className='text-white text-sm'>
                                        {repo.name}
                                    </p>
                                </div>

                                <p className='text-white/50 text-xs grow mt-2 mr-4 ml-4'>
                                    {repo.description}
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default Repos;