import OfferList from "@/components/offer/offerList";
import OfferTables from "../components/offer/offerTables";
import Promos from "@/components/offer/promos";
import { motion } from "framer-motion";
function Offer() {
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
			<OfferTables />
			<OfferList />
			<Promos/>
			</motion.div>
		</>
	);
}
export default Offer;
