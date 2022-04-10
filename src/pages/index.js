import { useWeb3Context } from '../context/web3.provider'

export default function Home() {
  const { account, nft } = useWeb3Context()

  return 'coucou'
}
