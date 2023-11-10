import React from 'react';
import { SiReact, SiHtml5, SiTailwindcss, SiJavascript, SiVite, SiMongodb, SiNodedotjs, SiCss3, SiExpress, SiAmazonaws, SiBootstrap, SiElectron, SiVisualstudiocode, SiPostman } from "@icons-pack/react-simple-icons";

const Technologies = () => {
    return (
        <div className='flex xs:text-center'>
            <div className='flex flex-col flex-wrap gap-y-2'>
                <h2 className='text-base text-white'>
                    Technologies
                </h2>
                <div className='flex flex-row flex-wrap xs:justify-center gap-2 text-[#848485]'>
                    <SiReact />
                    <SiJavascript />
                    <SiNodedotjs />
                    <SiHtml5 />
                    <SiTailwindcss />
                    <SiCss3 />
                    <SiVite />
                    <SiMongodb />
                    <SiExpress />
                    <SiAmazonaws />
                    <SiBootstrap />
                    <SiElectron />
                    <SiVisualstudiocode />
                    <SiPostman />
                </div>
            </div>
        </div>
    );
}

export default Technologies;