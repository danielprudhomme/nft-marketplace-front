import '../../styles/globals.css'
import { Web3Provider } from '../context/web3.provider'

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  )
}

export default MyApp
