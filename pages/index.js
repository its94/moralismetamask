import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated, logout, account, user } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>VRMC Coin</title>
        <meta name="description" content="VRMeta Center - Coin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAuthenticated ? (
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome {user.get("username")}</h1>

          <p className={styles.description}>
            Your Wallet Address : {" "}
            <code className={styles.code}>{account}</code>
          </p>
       <div className={styles.grid}>
        
         </div>
       <div>
          <button onClick={swaptoken} className={styles.card}
       <h2>Swap Token</h2>
       </button>
         <button onClick={staketokens} className={styles.card}
       <h2>Stake</h2>
       </button>
         </div>

          <div className={styles.grid}>
            <button
              onClick={logout}
              className={styles.card}
            >
              <h2>Logout</h2>
            </button>
          </div>
        </main>
      ) : (
        <main className={styles.main}>
      
          <h1 className={styles.title}>VRMC
             <Image src="/vercel.svg" alt="VRMC" width={72} height={16} />
            </h1>

          <p className={styles.description}>
            Get started by connect your wallet
          </p>

          <div className={styles.grid}>
            <button
              onClick={() => {
                authenticate({ provider: "metamask" });
              }}
              className={styles.card}
            >
              <h2>Matamask</h2>
            </button>

            <button
              onClick={() => {
                authenticate({ provider: "walletconnect" });
              }}
              className={styles.card}
            >
              <h2>OpenWallet</h2>
            </button>
          </div>
        </main>
      )}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/1_5032940684311528043.png" alt="VRMC" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
