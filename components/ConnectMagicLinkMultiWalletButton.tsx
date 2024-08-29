import { MagicLinkWalletConnectButton } from "@hoodieshq/solana-magic-link-wallet-adapter-react-ui"
import "@hoodieshq/solana-magic-link-wallet-adapter-react-ui/styles.css"
import "@solana/wallet-adapter-react-ui/styles.css"

const ConnectMagicLinkMultiWalletButton = () => {
  return (
    <MagicLinkWalletConnectButton className="bg-bkg-2 hover:bg-bkg-3  border border-fgd-4 default-transition flex h-12 items-center pl-4 pr-3 sm:pl-1 sm:pr-2 rounded-full cursor-pointer hover:bg-bkg-3 focus:outline-none" />
  )
}

export default ConnectMagicLinkMultiWalletButton
