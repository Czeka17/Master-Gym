import Title from '../shared/Title';
import styles from './we-are-here.module.scss'
import {AiOutlineArrowDown} from 'react-icons/ai'
function WeAreHere(){
    return  <section className={styles["we-are-here"]}>
    <Title title="Jesteśmy tutaj">
        <div className={styles["we-are-here__box"]}>
            <div className={styles["we-are-here__box-map"]}><div className={styles["mapouter"]}><div className={styles["gmap_canvas"]}><iframe src="https://maps.google.com/maps?q=Master%20Gym%20Wi%C5%84sko&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe></div></div></div>
            <div className={styles["we-are-here__box-text"]}>
                <p>Znajdziesz nas tutaj!</p>
                <p>Wińsko, ul. Nowa 2</p>
                <p>Lub...</p>
                <a href='#contact'><AiOutlineArrowDown size={"1.6rem"}/></a>
            </div>
        </div>
        </Title>
</section>
}

export default WeAreHere;


