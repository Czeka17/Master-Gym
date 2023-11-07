import styles from "./contact.module.scss";
import dumbell from "../../public/images/dumbell.jpg";
import Image from "next/image";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Title from "../shared/Title";
function Contact() {
	return (
		<section className={styles.socials}>
			<Title title='kontakt'>
				<div className={styles.socials__box}>
					<div className='circle-component first-circle'></div>
					<div
						className={styles.socials__img}
						data-aos='flip-up'
						data-aos-delay='400'
					>
						<Image
							src={dumbell}
							alt='Zdjęcie ukazujące sztangę na ciemnej macie'
						/>
					</div>
					<div className={styles.socials__text}>
						<p
							data-aos='fade-up'
							data-aos-delay='200'
						>
							<FaFacebookF /> Master Gym
						</p>
						<p
							data-aos='fade-up'
							data-aos-delay='400'
						>
							<AiOutlineMail /> mastergymsilownia@gmail.com
						</p>
						<a
							href='https://www.instagram.com/mastergymsilownia/'
							target='_blank'
						>
							<p
								data-aos='fade-up'
								data-aos-delay='600'
							>
								<AiOutlineInstagram /> Master Gym
							</p>
						</a>
					</div>
				</div>
			</Title>
		</section>
	);
}
export default Contact;
