import "../styles/globals.scss";
import Layout from "../components/Layout";
import { App } from "../hooks/bg";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const app = new App();
	});

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
