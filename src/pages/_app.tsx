import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "@/presentation/styles/global";
import { StyleSheetManager } from "styled-components";
import { Header } from "@/presentation/components/header";
import { Footer } from "@/presentation/components/footer";

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
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "variant"}>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</StyleSheetManager>
		</>
	);
}
