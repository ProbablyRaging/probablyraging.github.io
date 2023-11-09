import React from 'react';
import { SiGithub, SiDiscord, SiGmail } from "@icons-pack/react-simple-icons";

const Socials = () => {
    return (
        <div className='flex flex-row flex-wrap gap-2'>
            <div>
                <a href='https://github.com/probablyraging' target='_blank' rel='external noopener noreferrer' className='text-white flex flex-row items-center gap-x-2 rounded-xl p-2 font-semibold bg-white/10 hover:bg-white/20'>
                    <SiGithub className='w-[20px] h-[20px]' />
                </a>
            </div>
            <div>
                <a href='https://discord.com/users/438434841617367080' target='_blank' rel='external noopener noreferrer' className='text-white flex flex-row items-center gap-x-2 rounded-xl p-2 font-semibold bg-white/10 hover:bg-white/20'>
                    <SiDiscord className='w-[20px] h-[20px]' />
                </a>
            </div>
            <div>
                <a href='mailto:probablyraging@gmail.com' target='_blank' rel='external noopener noreferrer' className='text-white flex flex-row items-center gap-x-2 rounded-xl p-2 font-semibold bg-white/10 hover:bg-white/20'>
                    <SiGmail className='w-[20px] h-[20px]' />
                </a>
            </div>
        </div>
    );
}

export default Socials;