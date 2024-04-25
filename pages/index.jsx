import Layout from '@/components/Layout';
import Content from '@/components/Content';
import Projects from '@/components/Projects';
import Tooling from '@/components/Tooling';

export default function index() {
    return (
        <Layout>
            <Content />
            <Projects />
            <Tooling />
        </Layout>
    )
}