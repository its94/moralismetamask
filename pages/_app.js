import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    appId="Enter your moralis server appID"
    serverUrl="Enter your moralis server URL">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
