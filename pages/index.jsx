import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import LoadingAnimation from '@/components/LoadingAnimation';
import Content from '@/components/Content';
import Projects from '@/components/Projects';
import ComingSoon from '@/components/ComingSoon';

export default function index() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, [])

    return (
        <Layout>
            <LoadingAnimation isLoading={isLoading} />
            {!isLoading && (
                <main className='h-screen'>
                    <Content />
                    <Projects />
                    <ComingSoon />
                </main>
            )}
        </Layout>
    )
}