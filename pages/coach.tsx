import CoachInfo from "@/components/coach/coachInfo";
import CoachSocials from "@/components/coach/coachSocials";
import { motion } from "framer-motion";

function Coach() {
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
				<CoachInfo />
				<hr />
				<CoachSocials />
			</motion.div>
		</>
	);
}
export default Coach;
