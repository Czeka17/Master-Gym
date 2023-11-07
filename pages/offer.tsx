import OfferList from "@/components/offer/offerList";
import OfferTables from "../components/offer/offerTables";
import Promos from "@/components/offer/promos";
function Offer() {
	return (
		<>
			<OfferTables />
			<OfferList />
			<Promos/>
		</>
	);
}
export default Offer;
