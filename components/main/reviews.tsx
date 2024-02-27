import Title from "../shared/Title";
import classes from "./reviews.module.scss";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
function Reviews() {
	const boxVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
		hidden: { opacity: 0, y: 100 },
	};
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		
			control.start("visible");


			const script = document.createElement("script");
			script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
			console.log('script')
			return () => {
			
				document.body.removeChild(script);
			};

		
		
	}, [control]);
	return (
		<section className={classes.reviews}>
			<Title title='Opinie'>
				<motion.div
					ref={ref}
					variants={boxVariant}
					initial='hidden'
					whileInView='visible'
					animate={control}
					className='sk-ww-google-reviews box'
					data-embed-id='25371519'
				></motion.div>
			</Title>
		</section>
	);
}
export default Reviews;
