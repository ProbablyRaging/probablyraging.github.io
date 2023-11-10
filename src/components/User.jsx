import React from 'react';
import Socials from './Socials';

const User = () => {
    return (
        <div className='flex flex-row items-center gap-4 w-full rounded-lg mb-6 smup:mb-10'>
            <div className='flex items-center'>
                <img src="https://avatars.githubusercontent.com/u/24839609?v=4" loading='lazy' alt="" className='h-[50px] w-[50px] rounded-full bg-cover' />
            </div>
            <div className='flex w-full flex-row flex-wrap items-center justify-between gap-2'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold m-0'>
                        ProbablyRaging
                    </h1>
                    <h2 className='text-white/50 font-normal text-base m-0'>
                        Hobbyist Developer
                    </h2>
                </div>
                <Socials />
            </div>
        </div>
    );
}

export default User;