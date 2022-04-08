import { Web3Provider } from '../context/web3.provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  )
}

export default MyApp
