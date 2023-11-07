import Title from "../shared/Title";
import styles from './promos.module.scss'
function Promos(){
    return <section className={styles.promo}>
        <Title title="Promocje">
            <div className={styles.promo__box}>
                <div className={styles.promo__box__card}><h3>Rodzina</h3><hr/><p>20%</p><p>Dla 3 osób z najbliższej rodziny: <span>Tata, Mama, Córka, Syn</span></p></div>
                <div className={styles.promo__box__card}><h3>Przyprowadź osobę</h3><hr/><p>50/100%</p><p>50% za 1 przyprowadzoną osobę. 100% za 2 osoby. <span>Dotyczy tylko aktywnych karnetów</span></p></div>
            </div>
        </Title>
    </section>
}
export default Promos;