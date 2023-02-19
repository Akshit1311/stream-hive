import "../../styles/globals.css";
import type { AppProps } from "next/app";
import LivepeerLayout from "../components/layouts/LivepeerLayout";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "../components/rainbowlit/Rainbow";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <LivepeerLayout>
          <Component {...pageProps} />
        </LivepeerLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
