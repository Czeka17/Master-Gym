import ContactForm from "@/components/contact/contact-form";
import WeAreHere from "@/components/contact/we-are-here";
import { motion } from "framer-motion";

function Contact(){
    return <>
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
    <WeAreHere/>
    <ContactForm/>
    </motion.div>
    </>
}
export default Contact;