import styles from "./contact.module.scss";
import dumbell from "../../public/images/dumbell.jpg";
import Image from "next/image";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Title from "../shared/Title";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
function Contact() {
	const boxVariant = {
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: { duration: 0.3, delay: 0.1 },
		},
		hidden: { opacity: 0, scale: 0.75, x: 50 },
	};
	const secondBoxVariant = {
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: { duration: 0.3, delay: 0.3 },
		},
		hidden: { opacity: 0, scale: 0.75, x: 50 },
	}
	const thirdBoxVariant = {
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: { duration: 0.3, delay: 0.5 },
		},
		hidden: { opacity: 0, scale: 0.75, x: 50 },
	}
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);
	return (
		<section className={styles.socials}>
			<Title title='kontakt'>
				<div className={styles.socials__box}>
					<div className='circle-component first-circle'></div>
					<div className={styles.socials__img}>
						<Image
							src={dumbell}
							alt='Zdjęcie ukazujące sztangę na ciemnej macie'
						/>
					</div>
					<div className={styles.socials__text}>
						<a
							href='https://www.facebook.com/MasterGymSilownia'
							target='_blank'
						>
							<motion.p
								ref={ref}
								variants={boxVariant}
								initial='hidden'
								whileInView='visible'
								animate={control}
								className='box'
							>
								<FaFacebookF /> Master Gym
							</motion.p>
						</a>
						<motion.p ref={ref}
								variants={secondBoxVariant}
								initial='hidden'
								whileInView='visible'
								animate={control}
								className='box'>
							<AiOutlineMail /> mastergymsilownia@gmail.com
						</motion.p>
						<a
							href='https://www.instagram.com/mastergymsilownia/'
							target='_blank'
						>
							<motion.p ref={ref}
								variants={thirdBoxVariant}
								initial='hidden'
								whileInView='visible'
								animate={control}
								className='box'>
								<AiOutlineInstagram /> Master Gym
							</motion.p>
						</a>
					</div>
				</div>
			</Title>
		</section>
	);
}
export default Contact;
