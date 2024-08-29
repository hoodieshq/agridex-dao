import React, { ReactNode } from "react"
import { WalletProvider } from "@solana/wallet-adapter-react"
import { useMagicLinkWallet } from "@hoodieshq/solana-magic-link-wallet-adapter-react-ui"
import { WalletAdapter } from "@solana/wallet-adapter-base"

export function MagicLinkWalletProvider({ wallets, autoConnect, children }: {
  autoConnect?: boolean
  children: ReactNode
  wallets: WalletAdapter[]
}) {
  if (!process.env.NEXT_PUBLIC_MAGIC_LINK_PUBLIC_API_KEY) {
    throw new Error("Missing NEXT_PUBLIC_MAGIC_LINK_PUBLIC_API_KEY environment variable")
  }

  const { magicLinkWallet } = useMagicLinkWallet()
  const walletAdapters = React.useMemo(
    () => {
      const adapters = wallets
      return (magicLinkWallet ? [...adapters, magicLinkWallet] : adapters)
    },
    [magicLinkWallet, wallets],
  )
  
  return (
    <WalletProvider wallets={walletAdapters} autoConnect={autoConnect}>
      {children}
    </WalletProvider>
  )
}
