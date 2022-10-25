import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import type { NextPage } from "next";
import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";

const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home: NextPage = () => {
	const wallet = useWallet();

	return (
		<Flex
			flexDir="column"
			bgColor="black"
			minHeight="100vh"
			align="center"
			justify="space-around"
			color="white"
		>
			<Flex flexDir="column" align="center">
				<Heading className="header">🍭 Candy Drop</Heading>
				<Text className="sub-text">NFT drop machine with fair mint</Text>
				{wallet.publicKey ? (
					<Link href="/candy-machine"><Button>Go to the Candy Machine!</Button></Link>
				) : (
					<Flex flexDir="column" textAlign="center">
						<Image
							src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
							alt="emoji"
							paddingY="15px"
						/>
						<Flex justify="center">
							<WalletMultiButton />
						</Flex>
					</Flex>
				)}
			</Flex>

			<Flex flexDir="column" align="center">
				<Image
					alt="Twitter Logo"
					className="twitter-logo"
					src="twitter-logo.png"
					boxSize={10}
				/>
				<a
					className="footer-text"
					href={TWITTER_LINK}
					target="_blank"
					rel="noreferrer"
				>{`built on @${TWITTER_HANDLE}`}</a>
			</Flex>
		</Flex>
	);
};

export default Home;
