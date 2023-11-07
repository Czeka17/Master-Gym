import Link from "next/link";
import styles from "./offerTables.module.scss";
import Title from "../shared/Title";
function OfferTables() {
	return (
		<section className={styles["table-list"]}>
			<Title title='karnety'>
				<div className={styles["table-list__box"]}>
					<div className='circle-component third-circle'></div>
					<table
						data-aos='flip-right'
						data-aos-delay='200'
						data-aos-duration='1000'
					>
						<tbody>
							<tr>
								<th
									className={styles.carnets}
									colSpan={2}
								>
									Wejściowe
								</th>
							</tr>
							<tr>
								<th>Rodzaj</th>
								<th>Kwota</th>
							</tr>
							<tr>
								<td>1 wejście</td>
								<td>40.00 zł</td>
							</tr>
							<tr>
								<td>4 wejścia</td>
								<td>70.00 zł</td>
							</tr>
							<tr>
								<td>6 wejść</td>
								<td>100.00 zł</td>
							</tr>
							<tr>
								<td>9 wejść</td>
								<td>120.00 zł</td>
							</tr>
						</tbody>
					</table>
					<table
						data-aos='flip-left'
						data-aos-delay='300'
						data-aos-duration='1000'
					>
						<tbody>
							<tr>
								<th
									className={styles.carnets}
									colSpan={2}
								>
									Miesięczne
								</th>
							</tr>
							<tr>
								<th>Rodzaj</th>
								<th>Kwota (na miesiąc)</th>
							</tr>
							<tr>
								<td>1 miesiąc</td>
								<td>149.00 zł</td>
							</tr>
							<tr>
								<td>3 miesiące</td>
								<td>139.00 zł</td>
							</tr>
							<tr>
								<td>6 miesięcy</td>
								<td>129.00 zł</td>
							</tr>
							<tr>
								<td>12 miesięcy</td>
								<td>109.00 zł</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles["table-list__contact"]}>
					<Link href='/contact'>Skontaktuj się z nami w sprawie karnetu</Link>
				</div>
			</Title>
		</section>
	);
}
export default OfferTables;
