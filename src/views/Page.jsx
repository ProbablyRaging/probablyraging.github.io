import React from 'react';
import { Terminal, User, Repos, Technologies } from '../components';

const Page = () => {
    const bgSpans = Array.from({ length: 50 }, (_, index) => index);

    return (
        <React.Fragment>
            <div className='relative z-10 flex flex-col place-content-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 sm:py-8 lg:px-6 text-xl text-white bg-transparent'>

                <User />

                <Repos />

                <Technologies />

                <Terminal />
            </div>
            <div className="background">
                {bgSpans.map((value, index) => (
                    <span key={index} className='z-[-1]'></span>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Page;