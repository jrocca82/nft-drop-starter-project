import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
	PhantomWalletAdapter,
	TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { ChakraProvider } from "@chakra-ui/react";

import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

function MyApp({ Component, pageProps }: AppProps) {
	const network = (process.env.REACT_APP_SOLANA_NETWORK ??
		"devnet") as WalletAdapterNetwork;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);
	const wallets = useMemo(
		() => [new PhantomWalletAdapter(), new TorusWalletAdapter()],
		[network]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default MyApp;
