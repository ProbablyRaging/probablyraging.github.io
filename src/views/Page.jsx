import React from 'react';
import { Terminal, User, Repos, Technologies } from '../components';

const Page = () => {
    return (
        <div className='flex flex-col place-content-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 sm:py-8 lg:px-6 text-xl text-white'>
            <User />

            <Repos />

            <Technologies />

            <Terminal />
        </div>
    );
}

export default Page;