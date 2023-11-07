import styles from "./coachSocials.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Title from "../shared/Title";
function CoachSocials() {
	return (
		<section className={styles.coach__socials}>
			<Title title='Znajdziesz mnie na'>
				<div className={styles["coach__socials-box"]}>
					<div className='circle-component fifth-circle'></div>
					<div className={styles["coach__socials-box--text"]}>
						<a
							href='https://www.facebook.com/DejvdTrener'
							target='_blank'
						>
							<p>
								<FaFacebookF /> DejvdTrener
							</p>
						</a>
						<a
							href='https://www.instagram.com/dejvd_/'
							target='_blank'
						>
							<p>
								<AiOutlineInstagram /> dejvd_
							</p>
						</a>
					</div>
				</div>
			</Title>
		</section>
	);
}
export default CoachSocials;
