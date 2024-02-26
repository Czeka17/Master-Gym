import News from "@/components/blog/news";
import { motion } from "framer-motion";
function Blog() {
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
			<News />
			</motion.div>
		</>
	);
}
export default Blog;
