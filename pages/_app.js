import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    appId="RGIzqv212rmTuZISOTwthDBVOHpMCVoVpUfFZx5C"
    serverUrl="https://dbdnlyk3fwww.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
