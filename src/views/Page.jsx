import React from 'react';
import { Repos, Socials } from '../components';

const Page = () => {
    return (
        <React.Fragment>
            <div className='screen flex overflow-hidden relative z-10 w-[100vw] h-[100vh] border-[3px] border-solid border-[var(--primary-rgb)] aspect-[9/16] bg-[var(--primary-rgb)] bg-opacity-[15%]'>
                <div className='screen-image h-full w-full absolute z-[1] top-0 left-0 opacity-[0.3]'></div>
                <div className='screen-overlay h-full w-full absolute z-[2] top-0 left-0'></div>
                <div className='screen-content relative z-[3] m-4 pb-24 flex flex-col items-center justify-center grow-[1] gap-16 border-[1px] border-solid border-[var(--secondary-rgb)] border-opacity-50 rounded-lg'>
                    <i className='screen-icon fa-brands fa-codepen text-white text-[4rem]'></i>
                    <div className='screen-user relative flex flex-col items-center gap-4'>
                        <span className='name relative text-5xl font-normal xs:text-3xl select-none'>ProbablyRaging</span>
                        <Socials />
                        <Repos />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Page;