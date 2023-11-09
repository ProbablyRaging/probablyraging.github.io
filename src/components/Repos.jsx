import React, { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';
import axios from "axios";

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
        <div>
            {isLoading ? (
                <div className='grid w-full grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-2'>
                    <SkeletonCard isLoading={isLoading} />
                    <SkeletonCard isLoading={isLoading} />
                    <SkeletonCard isLoading={isLoading} />
                    <SkeletonCard isLoading={isLoading} />
                </div>
            ) : (
                <div className='font-poppins grid w-full md:max-w-[95%] grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-2'>
                    {pinnedRepos.map((repo, index) => (
                        <div key={index} className='flex w-full min-h-[122px] flex-col rounded-xl bg-white/10 px-4 py-6 pb-0'>
                            <a href={`https://github.com/probablyraging/${repo.name}`} target='_blank' rel='external noopener noreferrer' className='flex gap-2 items-center no-underline h-4 hover:underline'>
                                <img src="https://avatars.githubusercontent.com/u/24839609?v=4" width={'20'} height={'20'} loading='lazy' alt="" />
                                <p className='text-white text-sm'>
                                    {repo.name}
                                </p>
                            </a>

                            <p className='text-white/50 text-xs grow'>
                                {repo.description}
                            </p>

                            <div className='flex flex-row items-center gap-4'>
                                <p className='flex items-center gap-1 text-white/50 text-sm'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    {repo.stargazerCount}
                                </p>
                                <p className='flex items-center gap-1 text-white/50 text-sm'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z">
                                        </path>
                                    </svg>
                                    {repo.forkCount}
                                </p>
                                <div className='flex ml-auto'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <div className="h-[10px] w-[10px] rounded-full" style={{ backgroundColor: '#3178c6' }}></div>
                                        <p className='text-white/50 text-sm'>
                                            {repo.primaryLanguage.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Repos;