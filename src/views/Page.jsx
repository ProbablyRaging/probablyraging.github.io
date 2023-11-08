import React, { useState, useEffect } from 'react';
import { Terminal, Contact, SysInfo } from '../components';

const Page = () => {
    return (
        <>
            <div className='sm:hidden flex flex-col place-content-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 lg:px-6 lg:py-0 text-2xl text-white font-bold'>
                <p>Welcome to RageOS (GNU/Linux 5.4.0-1101 x86_64)</p>

                <Contact />

                <p>Information up to date as of Nov 7 09:46:53 2023</p>

                <SysInfo />

                <Terminal />
            </div>

            <div className='smup:hidden flex flex-col place-content-center items-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 lg:px-6 lg:py-0 text-lg text-white font-bold'>
                <Terminal />

                <Contact />
            </div>
        </>
    );
}

export default Page;