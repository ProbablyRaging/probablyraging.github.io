import React, { useState, useEffect } from 'react';

const Terminal = () => {
    const [terminal, setTerminal] = useState('');

    // Animate text
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

        setTimeout(() => {
            typeText();
        }, 500);
    }, []);

    return (
        <div className='flex flex-row'>
            <span className='text-[#26cd99]'>~/dev$:&nbsp;</span>
            <span>{terminal}</span>
            <span className='cursor'>█</span>
        </div>
    );
}

export default Terminal;