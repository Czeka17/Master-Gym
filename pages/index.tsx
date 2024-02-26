import Image from "next/image";
import Layout from "@/components/shared/layout";
import Header from "@/components/main/header";
import About from "@/components/main/about";
import Offer from "@/components/main/offer";
import Facebook from "@/components/main/facebook";
import Contact from "@/components/main/contact";
import { motion } from "framer-motion";
import Reviews from "@/components/main/reviews";

function Home() {
	
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
						transition: {
							duration: 0.5,
						},
					},
				}}
			>
				<Header />
				<About />
				<Reviews/>
				<hr />
				<Offer />
				<Facebook />
				<Contact />
			</motion.div>
		</>
	);
}
export default Home;
