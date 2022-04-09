import { ethers } from 'ethers'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import contractsData from '../contractsData.json'

const Web3Context = createContext({ provider: null })

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})

  const connectMetamask = useCallback(async () => {
    if (!window.ethereum) {
      window.alert('Metamask is required !')
      return
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    setAccount(accounts[0])

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await connectMetamask()
    })

    const marketplace = new ethers.Contract(
      contractsData.marketplace.address,
      contractsData.marketplace.abi,
      signer,
    )
    setMarketplace(marketplace)
    const nft = new ethers.Contract(
      contractsData.nft.address,
      contractsData.nft.abi,
      signer,
    )
    setNFT(nft)
  }, [])

  useEffect(() => {
    connectMetamask()
  }, [connectMetamask])

  return (
    <Web3Context.Provider
      value={{
        account,
        nft,
        marketplace,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3Context() {
  const context = useContext(Web3Context)

  if (!context) {
    throw new Error('useWeb3Context must be used inside a `Web3Provider`')
  }

  return context
}
