import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
   <MoralisProvider
    appId="6CF08Q5FQ7apoq4tcVbyVR3Lh1vFRktHpE5cYTki"
    serverUrl="https://9paos9ehpmff.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
