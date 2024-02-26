import Title from "../shared/Title";
import Image from "next/image";
import about from "../../public/images/silka.webp";
import dejv from "../../public/images/IMG_5926.webp";
import styles from "./about.module.scss";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
function About() {
	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
		hidden: { opacity: 0, scale: 0 },
	};
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);
	return (
		<section
			id='about-us'
			className={styles["about-us"]}
		>
			<Title title='O nas'>
				<motion.div
					ref={ref}
					variants={boxVariant}
					initial='hidden'
					whileInView='visible'
					animate={control}
					className={`${styles["about-us__box"]} box`}
				>
					<div className={`${styles["about-us__img"]} ${styles.second}`}>
						<Image
							src={dejv}
							alt='Zdjęcie przedtawiające trenera Master gym, Dawida Karasińskiego'
						/>
					</div>
					<div className={styles["about-us__text"]}>
						<h3>Trener</h3>
						<p>
							Nazywam się Dawid Karasiński. Jestem dwudziestolatkiem, który od
							najmłodszych lat interesuje się sportem. Większość życia
							poświęciłem na zdobywanie wiedzy na temat ludzkiego ciała oraz
							jego funkcjonalności.{" "}
						</p>
					</div>
				</motion.div>
				<motion.div
					ref={ref}
					variants={boxVariant}
					initial='hidden'
					whileInView='visible'
					animate={control}
					className={`${styles["about-us__box"]} box`}
				>
					<div className='circle-component third-circle'></div>
					<div className={styles["about-us__text"]}>
						<h3>Siłownia</h3>
						<p>
							Celem przewodnim jest stworzenie takiego miejsca, w którym każda
							osoba znajdzie coś dla siebie. To co nas napędza jest ciągła chęć
							rozwijania się. Chcąc maksymalnie sprostać wymogom bierzemy pod
							uwagę opinię klientów i wraz z ich potrzebami wprowadzamy nowe
							rzeczy, abyśmy mogli się cieszyć z najwyższej jakości treningów.
						</p>
					</div>
					<div className={styles["about-us__img"]}>
						<Image
							src={about}
							alt='Zdjęcie przedstawiające sztangę na ciemnym tle'
						/>
					</div>
				</motion.div>
			</Title>
		</section>
	);
}
export default About;
