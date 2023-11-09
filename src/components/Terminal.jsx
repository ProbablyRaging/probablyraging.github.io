import React, { useState, useEffect } from 'react';

const Terminal = () => {
    const [terminal, setTerminal] = useState('');
    const [ipAddress, setIpAddress] = useState(null);

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                setIpAddress(data.ip);
            })
            .catch((error) => {
                console.error('Error fetching IP address:', error);
                setIpAddress('Error');
            });
    }, []);

    // Animate text when the IP address is available
    useEffect(() => {
        if (ipAddress !== null) {
            const terminalText = `Connection established via eth0-${ipAddress}`;
            let currentIndex = 0;

            const typeText = () => {
                if (currentIndex < terminalText.length) {
                    setTerminal(terminalText.slice(0, currentIndex + 1));
                    currentIndex++;
                    setTimeout(typeText, 50);
                }
            };

            setTimeout(() => {
                typeText();
            }, 500);
        }
    }, [ipAddress]);

    return (
        <div className='lg:hidden flex flex-row fixed bottom-3 left-3 text-base'>
            <span className='text-[#26cd99]'>~/dev$:&nbsp;</span>
            <span>{terminal}</span>
            <span className='cursor'>█</span>
        </div>
    );
}

export default Terminal;