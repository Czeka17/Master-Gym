import Title from "../shared/Title";
import Link from "next/link";
import styles from "./offerList.module.scss";
function OfferList() {
	return (
		<section className={styles["offert-list"]}>
			<Title title='treningi personalne'>
				<div className={styles["offert-list__boxes"]}>
					<div
						className={styles["offert-list__box"]}
						data-aos='zoom-in'
						data-aos-delay='200'
					>
						<h3>1 Trening</h3>
						<hr />
						<p>Cena za jeden trening: </p>
						<p className={styles["price-tag"]}>110zł</p>
						<p>Cena za pakiet: </p>
						<p className={styles["price-tag"]}>110zł</p>
						<Link href='/contact'>
							<button>Wybierz</button>
						</Link>
					</div>
					<div
						className={styles["offert-list__box"]}
						data-aos='zoom-in'
						data-aos-delay='400'
					>
						<h3>4 Treningi</h3>
						<hr />
						<p>Cena za jeden trening: </p>
						<p className={styles["price-tag"]}>100zł</p>
						<p>Cena za pakiet: </p>
						<p className={styles["price-tag"]}>400zł</p>
						<Link href='/contact'>
							<button>Wybierz</button>
						</Link>
					</div>
					<div
						className={styles["offert-list__box"]}
						data-aos='zoom-in'
						data-aos-delay='200'
					>
						<h3>8 Treningów</h3>
						<hr />
						<p>Cena za jeden trening: </p>
						<p className={styles["price-tag"]}>87.50zł</p>
						<p>Cena za pakiet: </p>
						<p className={styles["price-tag"]}>700zł</p>
						<Link href='/contact'>
							<button>Wybierz</button>
						</Link>
					</div>
					<div
						className={styles["offert-list__box"]}
						data-aos='zoom-in'
						data-aos-delay='400'
					>
						<h3>12 Treningów</h3>
						<hr />
						<p>Cena za jeden trening: </p>
						<p className={styles["price-tag"]}>75.00zł</p>
						<p>Cena za pakiet: </p>
						<p className={styles["price-tag"]}>900zł</p>
						<Link href='/contact'>
							<button>Wybierz</button>
						</Link>
					</div>
				</div>
				<div
					className={styles["offert-list__coach"]}
					data-aos='zoom-in'
					data-aos-delay='200'
				>
					<Link href='/coach'>Poznaj naszego trenera</Link>
				</div>
			</Title>
		</section>
	);
}
export default OfferList;
