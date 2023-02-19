import "../../styles/globals.css";
import type { AppProps } from "next/app";
import LivepeerLayout from "../components/layouts/LivepeerLayout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LivepeerLayout>
        <Component {...pageProps} />
      </LivepeerLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
