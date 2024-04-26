import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { ScreenContext } from './Layout';

export default function Navbar() {
    const isSmallScreen = useContext(ScreenContext);
    const { scrollY } = useScroll();
    const height = useTransform(scrollY, [0, 100], [120, 60]);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        (async () => {
            const getWeather = await fetch(`/api/route`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    route: 'weather',
                })
            });
            const weatherData = await getWeather.json();
            setWeather(weatherData.data);
        })()
    }, []);

    if (isSmallScreen) {
        return (
            <div className='flex static top-0 left-0 w-full h-[60px] bg-glass z-50 select-none'>
                <div className='flex justify-between items-center w-3/4 m-auto'>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} width={36} height={36} alt='probablyraging.dev logo' />
                    </Link>

                    <div className='flex gap-8 font-medium'>
                        <Link href={'https://github.com/probablyraging'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                            <FaGithub fontSize={24} />
                        </Link>

                        <Link href={'https://discord.com/users/438434841617367080'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                            <FaDiscord fontSize={24} />
                        </Link>

                        <Link href={'mailto:probablyraging@gmail.com'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                            <BiLogoGmail fontSize={24} />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            className='flex fixed top-0 left-0 w-full h-[60px] bg-glass z-50 select-none'
            style={{ height }}
        >
            <div className='flex justify-between items-center w-3/4 m-auto'>
                <Link href={'/'}>
                    <Image src={'/logo.svg'} width={42} height={42} alt='probablyraging.dev logo' />
                </Link>

                <div className='flex gap-16 font-medium'>
                    {weather ? (
                        <div className='flex items-center gap-1'>
                            <p>{weather.current.temp_c}°C</p>
                            <img src={weather.current.condition.icon} width={32} height={32} alt="weather icon" />
                            <p>SYDNEY</p>
                            <p>{weather.location.localtime.split(' ')[1]}</p>
                        </div>
                    ) : (
                        <div className='flex items-center gap-1'>
                            <p className='mr-10'>0°C</p>
                            <p>SYDNEY</p>
                            <p>00:00</p>
                        </div>
                    )}

                    <Link href={'https://github.com/probablyraging'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                        <FaGithub fontSize={28} />
                    </Link>

                    <Link href={'https://discord.com/users/438434841617367080'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                        <FaDiscord fontSize={26} />
                    </Link>

                    <Link href={'mailto:probablyraging@gmail.com'} target='_blank' className='py-2 border-b-4 border-b-transparent hover:border-b-dazzle duration-200'>
                        <BiLogoGmail fontSize={26} />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}