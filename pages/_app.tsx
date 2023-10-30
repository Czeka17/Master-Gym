import '../public/globals.css'
import { AppProps } from 'next/app';
import Footer from '@/components/footer';
import MainLayout from '@/components/mainlayout';
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
          <MainLayout>
            <Component {...pageProps} />
            <hr/>
            <Footer/>
          </MainLayout>
  );
}
