import Image from "next/image";
import Layout from "@/components/shared/layout";
import Header from "@/components/main/header";
import About from "@/components/main/about";
import Offer from "@/components/main/offer";
import Facebook from "@/components/main/facebook";
import Contact from "@/components/main/contact";
function Home() {
	return (
		<>
			<Header />
			<About />
			<hr />
			<Offer />
			<Facebook />
			<Contact />
		</>
	);
}
export default Home;
