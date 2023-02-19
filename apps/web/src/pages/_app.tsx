import "../../styles/globals.css";
import type { AppProps } from "next/app";
import LivepeerLayout from "../components/layouts/LivepeerLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LivepeerLayout>
      <Component {...pageProps} />
    </LivepeerLayout>
  );
}

export default MyApp;
