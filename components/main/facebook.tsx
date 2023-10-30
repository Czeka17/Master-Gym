import Image from "next/image";
import facebook from '../../public/images/facebook.svg'
import styles from './facebook.module.scss'
import Title from "../Title";
function Facebook(){
return <section className={styles.group}>
    <Title title="Dołącz do naszej grupy na facebooku">
    <div className={styles.group__ref}>
        <a href="https://www.facebook.com/groups/2645930245709511" target="_blank"><button >Dołącz do naszej społeczności</button></a>
    </div>
    <div className={styles.group__img}>
    <Image src={facebook} alt=""/>
    <Image src={facebook} alt=""/>
    </div>
    </Title>
</section>
}
export default Facebook;