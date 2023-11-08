import React from 'react';
import { SiGithub, SiDiscord, SiGmail } from "@icons-pack/react-simple-icons";

const Contact = () => {
    return (
        <>
            <div className='sm:hidden'>
                <div className='flex flex-row gap-[50px]'>
                    <div>* Technologies:</div>
                    <div>JS, ReactJS, NodeJS, HTML, CSS, and more</div>
                </div>

                <div className='flex flex-row gap-[100px]'>
                    <div>* Projects:</div>
                    <div><a href="https://github.com/probablyraging" target='_blank' rel="external noopener noreferrer">https://github.com/probablyraging</a></div>
                </div>

                <div className='flex flex-row gap-[112px]'>
                    <div>* Discord:</div>
                    <div><a href="https://discord.com/users/438434841617367080" target='_blank' rel="external noopener noreferrer">ProbablyRaging</a></div>
                </div>

                <div className='flex flex-row gap-[135px]'>
                    <div>* Email:</div>
                    <div><a href="mailto:probablyraging@gmail.com" target='_blank' rel="external noopener noreferrer">probablyraging@gmail.com</a></div>
                </div>
            </div>

            <div className='smup:hidden flex flex-row gap-10 absolute top-[60%]'>
                <div><a href="https://github.com/probablyraging" target='_blank' rel="external noopener noreferrer"><SiGithub className='text-white text-3xl' /></a></div>
                <div><a href="https://discord.com/users/438434841617367080" target='_blank' rel="external noopener noreferrer"><SiDiscord className='text-white text-3xl' /></a></div>
                <div><a href="mailto:probablyraging@gmail.com" target='_blank' rel="external noopener noreferrer"><SiGmail className='text-white text-3xl' /></a></div>
            </div>
        </>
    );
}

export default Contact;