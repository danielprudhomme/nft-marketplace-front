import Head from 'next/head'
import styles from '../../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
