import React, { useState, useEffect } from 'react';

const SysInfo = () => {
    const [systemLoad, setSystemLoad] = useState('0.00');
    const [processes, setProcesses] = useState('0');
    const [activeUsers, setActiveUsers] = useState('1');
    const [memUsage, setMemUsage] = useState('00');

    // Random value gen
    const generateRandomValue = (min, max, toFixed) => {
        return (Math.random() * (max - min) + min).toFixed(toFixed);
    };

    // Randomize the system info values
    const randomizeValues = () => {
        setSystemLoad(generateRandomValue(0.01, 2.00, 2));
        setProcesses(Math.floor(generateRandomValue(100, 150, 2)));
        setActiveUsers(Math.floor(generateRandomValue(1, 9, 1)));
        setMemUsage(Math.floor(generateRandomValue(10, 17, 1)));
    };

    // Run the randomization when the component mounts
    useEffect(() => {
        randomizeValues();
    }, []);

    return (
        <>
            <div className='flex flex-row gap-[200px]'>
                <div className='flex flex-row gap-[60px]'>
                    <div>System load:</div>
                    <div>{systemLoad}</div>
                </div>
                <div className='flex flex-row gap-[84px]'>
                    <div>Processes:</div>
                    <div>{processes}</div>
                </div>
            </div>

            <div className='flex flex-row gap-[42px]'>
                <div className='flex flex-row gap-[73px]'>
                    <div>Usage of /:</div>
                    <div>13.7% of 128.89GB</div>
                </div>
                <div className='flex flex-row gap-12'>
                    <div>Active users:</div>
                    <div>{activeUsers}</div>
                </div>
            </div>

            <div className='flex flex-row gap-[211px]'>
                <div className='flex flex-row gap-12'>
                    <div>Memory usage:</div>
                    <div>{memUsage}%</div>
                </div>
                <div className='flex flex-row gap-12'>
                    <div>eth0 address:</div>
                    <div>0.0.0.0</div>
                </div>
            </div>
        </>
    );
}

export default SysInfo;