import styles from './layout.module.scss'
import { useEffect, useState } from 'react';
import {FaDumbbell} from 'react-icons/fa'
import Link from 'next/link';
function Layout(){
  const [scrolling,setScrolling] = useState(false)
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolling(true);
      } else{
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return <nav id="navbar" className={styles.navbar}>
    <div className={`${styles['bg-animation']} ${scrolling ? styles.scrolled : ''}`}></div>
  <div className={styles.container}>
    <Link className={styles['navbar-brand']} href="/"><FaDumbbell/>Master Gym</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className={styles["navbar-nav"]}>
        <Link className={styles["nav-link"]} aria-current="page" href="/">Home</Link>
        <Link href="/coach" className={styles["nav-link"]}>Trener</Link>
        <Link href="/offer" className={styles["nav-link"]}>Oferta</Link>
        <Link href="/contact" className={styles["nav-link"]}>Kontakt</Link>
      </div>
    </div>
  </div>
</nav>
}
export default Layout;