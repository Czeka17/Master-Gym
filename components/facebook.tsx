import Image from "next/image";
import facebook from '../public/images/facebook.svg'
import styles from './facebook.module.scss'
function Facebook(){
return <section className={styles.group}>
<h2>Dołącz do naszej grupy na facebooku</h2>
<div className={styles.underline}></div>
<div className={styles.container}>
    <div className={styles.group__ref}>
        <a href="https://www.facebook.com/groups/2645930245709511" target="_blank"><button >Dołącz do naszej społeczności</button></a>
    </div>
    <div className={styles.group__img}>
    <Image src={facebook} alt=""/>
    <Image src={facebook} alt=""/>
    </div>
</div>
</section>
}
export default Facebook;