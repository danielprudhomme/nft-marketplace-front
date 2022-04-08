import Head from 'next/head'
import { useWeb3Context } from '../context/web3.provider'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { account, nft } = useWeb3Context()

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>NFT Marketplace</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
