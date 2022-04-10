import { Container, Nav, Navbar } from 'react-bootstrap'
import { useWeb3Context } from '../context/web3.provider'

export default function Navigation() {
  const { account } = useWeb3Context()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NFT Marketplace</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            {account ? account : 'Please connect to MetaMask'}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
