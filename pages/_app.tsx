import { useEffect } from "react";
import "../public/globals.css";
import { AppProps } from "next/app";
import Footer from "@/components/shared/footer";
import MainLayout from "@/components/shared/mainlayout";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	useEffect(() => {
		document.title = 'Master Gym';
		const metaDescription = document.createElement('meta');
		metaDescription.name = 'description';
		metaDescription.content = 'Dołącz do Master Gym! Siłowni w Wińsku z wykształconym trenerem.';
		document.head.appendChild(metaDescription);
		const metaKeywords = document.createElement('meta');
		metaKeywords.name = 'keywords';
		metaKeywords.content = 'Siłownia, Trener persolalny,Dawid Karasiński, Wińsko, Ćwiczenia'; 
		document.head.appendChild(metaKeywords);
		return () => {
		  document.title = 'Default Title';
		  document.head.removeChild(metaDescription);
		};
	  }, []);
	return (
		<MainLayout>
			<Component {...pageProps} />
			<hr />
			<Footer />
		</MainLayout>
	);
}
