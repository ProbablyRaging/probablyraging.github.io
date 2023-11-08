import React, { useState, useEffect } from 'react';

const Page = () => {
    const [terminal, setTerminal] = useState('');

    useEffect(() => {
        const terminalText = `Hi, I'm ProbablyRaging 👋`;
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex < terminalText.length) {
                setTerminal(terminalText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeText, 50);
            }
        };

        typeText();
    }, []);

    return (
        <div className='flex flex-col place-content-center m-auto max-w-4xl min-h-screen box-border px-8 py-16 lg:px-6 lg:py-0'>
            <div className='text-2xl font-bold text-white'>
                <div className='flex flex-col mb-6'>
                    <p>Welcome to RageOS (GNU/Linux 5.4.0-1101 x86_64)</p>
                    <div className='flex flex-row gap-[50px]'>
                        <div>* Technologies:</div>
                        <div>JS, ReactJS, NodeJS, HTML, CSS, and more</div>
                    </div>

                    <div className='flex flex-row gap-[100px]'>
                        <div>* Projects:</div>
                        <div><a href="https://github.com/probablyraging" target='_blank' rel="external noopener noreferrer">https://github.com/probablyraging</a></div>
                    </div>

                    <div className='flex flex-row gap-[112px]'>
                        <div>* Contact:</div>
                        <div><a href="mailto:probablyraging@gmail.com" target='_blank' rel="external noopener noreferrer">probablyraging@gmail.com</a></div>
                    </div>

                    <p>Information up to date as of Tue Nov 7 22:46:53 AEDT 2023</p>

                    <div className='flex flex-row gap-[200px]'>
                        <div className='flex flex-row gap-[60px]'>
                            <div>System load:</div>
                            <div>0.01</div>
                        </div>
                        <div className='flex flex-row gap-[84px]'>
                            <div>Processes:</div>
                            <div>104</div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-[55px]'>
                        <div className='flex flex-row gap-[73px]'>
                            <div>Usage of /:</div>
                            <div>35.3% of 28.89GB</div>
                        </div>
                        <div className='flex flex-row gap-12'>
                            <div>Active users:</div>
                            <div>1</div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-[214px]'>
                        <div className='flex flex-row gap-12'>
                            <div>Memory usage:</div>
                            <div>55%</div>
                        </div>
                        <div className='flex flex-row gap-12'>
                            <div>eth0 address:</div>
                            <div>0.0.0.0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='text-2xl'>
                    <span className='text-[#26cd99]'>~/dev$:&nbsp;</span>
                </div>
                <div className='text-2xl font-bold text-white'>{terminal}</div>
                <div className='cursor text-2xl font-bold text-white'>█</div>
            </div>
        </div>
    );
}

export default Page;