import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/globals.css'
import Layout from '../components/layout'
import { Web3Provider } from '../context/web3.provider'

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  )
}

export default MyApp
