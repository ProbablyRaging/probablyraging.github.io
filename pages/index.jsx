import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Content from '@/components/Content';
import Projects from '@/components/Projects';
import Tooling from '@/components/Tooling';
import LoadingAnimation from '@/components/LoadingAnimation';

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
                    <Tooling />
                </main>
            )}
        </Layout>
    )
}