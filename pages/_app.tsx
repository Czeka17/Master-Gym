import "../public/globals.css";
import { AppProps } from "next/app";
import Footer from "@/components/shared/footer";
import MainLayout from "@/components/shared/mainlayout";
export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
			<hr />
			<Footer />
		</MainLayout>
	);
}
