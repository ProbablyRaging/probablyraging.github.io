import React from 'react';
import Socials from './Socials';

const User = () => {
    return (
        <div className='flex flex-col w-full rounded-lg mb-4 smup:mb-10'>
            <div className='flex items-center'>
                <img src="https://avatars.githubusercontent.com/u/24839609?v=4" loading='lazy' alt="" className='h-[50px] w-[50px] rounded-full bg-cover' />
            </div>
            <div className='flex w-full flex-row flex-wrap items-center justify-between'>
                <h1 className='font-poppins text-2xl font-bold'>
                    ProbablyRaging
                </h1>
                <Socials />
            </div>
        </div>
    );
}

export default User;