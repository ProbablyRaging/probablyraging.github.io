import React from 'react';
import { Terminal, User, Header, Repos, Technologies } from '../components';

const Page = () => {
    return (
        <div className='flex flex-col place-content-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 sm:py-8 lg:px-6 text-xl text-white'>
            <User />

            <Header title={'About Me'} />

            <span className='font-poppins text-base text-white/70'>
                Hey! I'm ProbablyRaging, a hobbyist Web and App Developer. I've spent countless hours immersing myself in a variety of projects across different platforms and technologies.
            </span>

            <Header title={'Projects'} margin={'mt-10'} />

            <Repos />

            <Header title={'Technologies'} margin={'mt-10 mb-0'} />

            <Technologies />

            <Terminal />
        </div>
    );
}

export default Page;