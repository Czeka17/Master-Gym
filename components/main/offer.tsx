import styles from "./offer.module.scss";
import Image from "next/image";
import crossfit from "../../public/images/silka2.webp";
import Title from "../shared/Title";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
function Offer() {
	const boxVariant = {
		visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, delay:0.1 } },
		hidden: { opacity: 0, scale: 0.75, y: -100 },
	};
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);
	return (
		<section className={styles.offer}>
			<Title title='Zobacz naszą ofertę'>
				<motion.div
					ref={ref}
					variants={boxVariant}
					initial='hidden'
					whileInView='visible'
					animate={control}
					className={`${styles.offer__box} box`}
				>
					<div className={styles.offer__img}>
						<Image
							src={crossfit}
							alt='Zdjęcie przedstawiające sprzęt do ćwiczeń'
						/>
					</div>
					<div className='circle-component fourth-circle'></div>
					<div className={styles.offer__text}>
						<p>Wybierz odpowiedni plan treningowy oraz ofertę dla siebie</p>
						<Link
							href={"/offer"}
							type='button'
							className={styles.offer__btn}
						>
							Sprawdź
						</Link>
					</div>
				</motion.div>
			</Title>
		</section>
	);
}
export default Offer;
