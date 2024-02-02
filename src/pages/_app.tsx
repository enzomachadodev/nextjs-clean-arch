import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "@/presentation/styles/global";
import { StyleSheetManager } from "styled-components";
import { Header } from "@/presentation/components/header";
import { Footer } from "@/presentation/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/presentation/contexts/modal-context";
import { ErrorModal } from "@/presentation/components/error-modal";
import { SuccessModal } from "@/presentation/components/success-modal";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

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
			<QueryClientProvider client={queryClient}>
				<ModalProvider>
					<StyleSheetManager shouldForwardProp={(prop) => prop !== "variant"}>
						<GlobalStyles />
						<Header />
						<Component {...pageProps} />
						<Footer />
						<ErrorModal />
						<SuccessModal />
					</StyleSheetManager>
				</ModalProvider>
			</QueryClientProvider>
		</>
	);
}

