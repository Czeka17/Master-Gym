import styles from './offer.module.scss'
import Image from 'next/image';
import crossfit from '../public/images/crossfit.jpg'
function Offer(){
    return  <section className={styles.offer}>
    <h2  data-aos="fade-down" data-aos-delay="200">Zobacz naszą ofertę</h2>
    <div className={styles.underline}></div>
    <div className={styles.container}>
    <div className={styles.offer__box} data-aos="fade-up" data-aos-delay="400">
    <div className={styles.offer__img}><Image src={crossfit} alt="Zdjęcie przedstawiające sprzęt do ćwiczeń"/>
    </div>
    <div className="circle-component fourth-circle"></div>
    <div className={styles.offer__text}>
        <p>Wybierz odpowiedni plan treningowy oraz ofertę dla siebie</p>
    <a href="offert.html" type="button" className={styles.offer__btn}>Sprawdź</a></div>
    </div>
</div>
</section>
}
export default Offer;