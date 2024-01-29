import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Head from "next/head";
import { Header } from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Centro Pokémon</title>
				<meta
					name="description"
					content="A web project developed with NextJS and TypeScript for a front-end test"
				/>
			</Head>
			<GlobalStyles />
			<Header />
			<Component {...pageProps} />
		</>
	);
}

