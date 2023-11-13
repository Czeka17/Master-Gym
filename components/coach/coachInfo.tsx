import styles from "./coachInfo.module.scss";
import Image from "next/image";
import dejv from "../../public/images/IMG_5923.jpg";
import dejv2 from "../../public/images/IMG_5927.jpg";
import Title from "../shared/Title";
import {GiWeightLiftingUp,GiWeight} from 'react-icons/gi'
import { FaBeer } from "react-icons/fa";
function CoachInfo() {
	return (
		<section className={styles.coach}>
			<Title title='Trener'>
				<div className={styles.coach__box}>
					<div className={styles["coach__box-info"]}>
						<div className={styles["coach__box-info--img"]}>
							<Image
								src={dejv}
								alt='Zdjęcie przedtawiające trenera Master gym, Dawida Karasińskiego'
							/>
						</div>
						<div className={styles.coach__img}>
					<GiWeight size={42}/>
					<GiWeightLiftingUp size={"7rem"}/>
					
				</div>
						<div className={styles["coach__box-info--text"]}>
							<p>
								Nazywam się Dawid Karasiński. Jestem dwudziestolatkiem, który od
								najmłodszych lat interesuje się sportem. Większość życia
								poświęciłem na zdobywanie wiedzy na temat ludzkiego ciała oraz
								jego funkcjonalności. Samodzielnie opracowałem dietę sprzyjającą
								zdrowiu. Po kilku latach ukończyłem odpowiednie kursy
								poszerzające wiedzę na temat warsztatu treningowego. Dzięki
								zdobytej wiedzy chcę pomóc innym w doskonaleniu się.
							</p>
						</div>
					</div>
					<hr />
					<h2>Dlaczego trenuję</h2>
					<div className={styles.underline}></div>
					<div className={styles["coach__box-info"]}>
						<div
							className={`${styles["coach__box-info--img"]} ${styles["coach__box-info--img--right"]}`}
						>
							<Image
								src={dejv2}
								alt='Zdjęcie przedtawiające trenera Master gym, Dawida Karasińskiego'
							/>
						</div>
						<div
							className={`${styles["coach__box-info--text"]} ${styles["coach__box-info--text--right"]}`}
						>
							<p>
								Praca z ludźmi daje mi wiele satysfakcji. Cieszy mnie, gdy
								widzę, że klienci dzięki ćwiczeniom stają się sprawniejsi,
								zdrowsi a przy tym szczęśliwsi. W pracy trenera personalnego
								moim nadrzędnym celem jest niesienie pomocy swoim podopiecznym w
								założonych celach siłowych, sylwetkowych oraz sportowych.
							</p>
						</div>
						<div className={styles.coach__img}>
					<GiWeight size={42}/>
					<GiWeightLiftingUp size={"7rem"}/>
					
				</div>
					</div>
					
				</div>
			</Title>
		</section>
	);
}
export default CoachInfo;
