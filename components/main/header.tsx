import Image from "next/image";
import gym from '../../public/images/gym.svg'
import styles from './header.module.scss'
import logo from '../../public/images/mastergym.png'
function Header(){
    return  <header className={styles.header}>
    <div className={styles.header__img}>
        <div className={styles.header__shadow}></div>
    </div>
    <div className={styles.header__text}>
        <div className={styles["header__text--icon"]}>
            <Image src={gym} alt="" width={50} height={50}/>
            <Image src={gym} alt="" width={100} height={100}/>
        </div>
        <Image src={logo} alt="Logo Master Gym" width={300}/>
        <h1 data-aos="fade-left" data-aos-delay="200">Witaj w Master Gym</h1>
        <a data-aos="fade-left" data-aos-delay="600" href="#about-us" type="button" className={styles.btn}>Ćwicz z nami</a>
    </div>
</header>
}
export default Header;