import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNodemon } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNextui } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPm2 } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

const projects = [
    {
        name: '4dc',
        description: '4DC is a multi-purpose discord.js v14 bot with 30+ custom slash commands and useful features including; general moderation, mass event protection, custom blacklist, warning system, rank and xp economy.',
        image: '/4dc.webp',
        langs: [<SiJavascript fontSize={32} />, <FaNodeJs fontSize={32} />, <SiNodemon fontSize={32} />, <SiMongodb fontSize={32} />, <SiPm2 fontSize={32} />],
        github: 'https://github.com/probablyraging/4dc',
    },
    {
        name: 'Hide YouTube Shorts',
        description: 'Hide YouTube Shorts is a Chrome extension that allows users to hide YouTube Shorts videos effortlessly.',
        image: '/hys.webp',
        langs: [<SiJavascript fontSize={32} />, <FaReact fontSize={32} />, <SiVite fontSize={32} />, <SiNextui fontSize={32} />, <SiTailwindcss fontSize={32} />],
        github: 'https://github.com/probablyraging/hide-youtube-shorts',
        cws: 'https://chrome.google.com/webstore/detail/aljlkinhomaaahfdojalfmimeidofpih',
    },
    {
        name: 'Rumbl',
        description: 'Rumbl is an Omegle alternative for hosting a 1-on-1 video and text chat with strangers worldwide – for free, and with complete anonymity.',
        image: '/rumbl.webp',
        langs: [<SiJavascript fontSize={32} />, <FaNodeJs fontSize={32} />, <SiMongodb fontSize={32} />, <SiVercel fontSize={32} />, <TbBrandNextjs fontSize={32} />, <SiNextui fontSize={32} />, <SiFramer fontSize={32} />, <SiTailwindcss fontSize={32} />],
        github: 'https://github.com/probablyraging/rumbl',
        website: 'https://rumbl.vercel.app',
        margin: 'ml-28'
    },
    {
        name: 'ContentCreator',
        description: 'ContentCreator is a Discord community of content creators, developers, gamers, and more. Bringing together like-miinded individuals from all around the world.',
        image: '/contentcreator.webp',
        langs: [<FaDiscord fontSize={32} />],
        discord: 'https://discord.gg/UtQjHuTJeA',
    }
];

const projectsMobile = [
    {
        name: '4dc',
        image: '/4dc.webp',
        langs: [<SiJavascript fontSize={20} />, <FaNodeJs fontSize={20} />, <SiNodemon fontSize={20} />, <SiMongodb fontSize={20} />, <SiPm2 fontSize={20} />],
        github: 'https://github.com/probablyraging/4dc',
    },
    {
        name: 'Hide YouTube Shorts',
        image: '/hys.webp',
        langs: [<SiJavascript fontSize={20} />, <FaReact fontSize={20} />, <SiVite fontSize={20} />, <SiNextui fontSize={20} />, <SiTailwindcss fontSize={20} />],
        github: 'https://github.com/probablyraging/hide-youtube-shorts',
        cws: 'https://chrome.google.com/webstore/detail/aljlkinhomaaahfdojalfmimeidofpih',
    },
    {
        name: 'Rumbl',
        image: '/rumbl.webp',
        langs: [<SiJavascript fontSize={20} />, <FaNodeJs fontSize={20} />, <SiMongodb fontSize={20} />, <SiVercel fontSize={20} />, <TbBrandNextjs fontSize={20} />, <SiNextui fontSize={20} />, <SiFramer fontSize={20} />, <SiTailwindcss fontSize={20} />],
        github: 'https://github.com/probablyraging/rumbl',
        website: 'https://rumbl.vercel.app',
        margin: 'ml-28'
    },
    {
        name: 'ContentCreator',
        image: '/contentcreator.webp',
        langs: [<FaDiscord fontSize={20} />],
        discord: 'https://discord.gg/UtQjHuTJeA',
    }
];

export { projects, projectsMobile }