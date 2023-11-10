import React from 'react';

const Header = ({ title, margin }) => {
    return (
        <h2 className={`flex w-full items-center text-lg gap-x-3 ${margin}`}>
            {title}
            <div className="h-[1px] grow bg-[#333333]"></div>
        </h2>
    );
}

export default Header;