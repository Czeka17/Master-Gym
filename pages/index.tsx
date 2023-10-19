import Image from 'next/image'
import Layout from '@/components/layout';
import Header from '@/components/header';
import About from '@/components/about';
import Offer from '@/components/offer';
import Facebook from '@/components/facebook';
import Contact from '@/components/contact';

function Home() {
  return (
    <main>
     <Header/>
     <About/>
     <hr/>
     <Offer/>
     <Facebook/>
     <Contact/>
    </main>
  )
}
export default Home;
