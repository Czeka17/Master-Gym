import styles from "./offer.module.scss";
import Image from "next/image";
import crossfit from "../../public/images/silka2.webp";
import Title from "../shared/Title";
import Link from "next/link";
function Offer() {
	return (
		<section className={styles.offer}>
			<Title title='Zobacz naszą ofertę'>
				<div
					className={styles.offer__box}
					data-aos='fade-up'
					data-aos-delay='400'
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
							href={'/offer'}
							type='button'
							className={styles.offer__btn}
						>
							Sprawdź
						</Link>
					</div>
				</div>
			</Title>
		</section>
	);
}
export default Offer;
