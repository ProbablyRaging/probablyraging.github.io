import React, { useState, useEffect, createContext } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export const ScreenContext = createContext(false);

export default function Layout({ children }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 930);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(isSmallScreen);
    }, [isSmallScreen])

    return (
        <React.Fragment>
            <Head>
                <title>probablyraging.dev</title>

                <meta name='description' content='Creating good shit since 2016' />
                <meta name="keywords" content="web developer, JavaScript, React, Python, front-end development, UI/UX, mobile apps, Sydney web developer, freelance developer" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='author' content='probablyraging' />

                <meta httpEquiv='content-language' content='en' />

                <meta property='og:title' content='probablyraging.dev' />
                <meta property='og:description' content='Creating good shit since 2016' />
                <meta property='og:url' content='https://shitestate.io' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/ogimage.png' />

                <meta name='twitter:title' content='probablyraging.dev' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:description' content='Creating good shit since 2016' />
                <meta name='twitter:image' content='/ogimage.png' />

                <link rel='canonical' href='https://shitestate.io' />

                <script src='//code.tidio.co/9n1rsvfxyx3xdjx5haw0ckqtuumdvqid.js' async />
            </Head>

            <ScreenContext.Provider value={isSmallScreen}>
                <Navbar />
                {children}
                <Footer />
            </ScreenContext.Provider>
        </React.Fragment>
    )
}