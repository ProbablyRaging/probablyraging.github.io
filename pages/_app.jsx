import { Raleway } from 'next/font/google';
import '../styles/globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={`${raleway.className} text-white`}>
            <Component {...pageProps} />
        </main>
    );
}