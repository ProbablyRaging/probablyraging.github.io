import React from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>probablyraging.dev</title>

                <meta name='description' content='Creating good shit since 2016' />
                <meta name="keywords" content="web developer, JavaScript, React, Python, front-end development, UI/UX, mobile apps, Sydney web developer, freelance developer" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='author' content='probablyraging' />

                <meta httpEquiv='content-language' content='en' />
                <meta name="theme-color" content="#AB87F0" />

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
            </Head>

            {children}
        </React.Fragment>
    )
}