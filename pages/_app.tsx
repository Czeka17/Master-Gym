import '../public/globals.css'
import { AppProps } from 'next/app';
import MainLayout from '@/components/mainlayout';
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
  );
}
