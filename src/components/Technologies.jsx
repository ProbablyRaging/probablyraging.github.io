import React from 'react';
import { SiReact, SiHtml5, SiTailwindcss, SiJavascript, SiVite, SiMongodb, SiNodedotjs, SiCss3, SiExpress, SiAmazonaws } from "@icons-pack/react-simple-icons";

const Technologies = () => {
    return (
        <div className='font-poppins grid grid-cols-2 gap-5'>
            <div className='flex flex-col flex-wrap gap-y-2'>
                <h2 className='text-base text-white'>
                    Frontend
                </h2>
                <div className='flex flex-row flex-wrap gap-2 text-[#848485]'>
                    <SiReact />
                    <SiHtml5 />
                    <SiTailwindcss />
                    <SiCss3 />
                    <SiVite />
                </div>
            </div>

            <div className='flex flex-col flex-wrap gap-y-2'>
                <h2 className='text-base text-white'>
                    Backend
                </h2>
                <div className='flex flex-row flex-wrap gap-2 text-[#848485]'>
                    <SiJavascript />
                    <SiNodedotjs />
                    <SiMongodb />
                    <SiExpress />
                    <SiAmazonaws />
                </div>
            </div>
        </div>
    );
}

export default Technologies;