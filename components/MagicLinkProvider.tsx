"use client"
import React from "react"
import { useWallet } from '@solana/wallet-adapter-react'
import { MagicLinkWalletModalProvider } from "@hoodieshq/solana-magic-link-wallet-adapter-react-ui"

export function MagicLinkProvider({ children }: React.PropsWithChildren<any>){
  const { connect, wallet, wallets } = useWallet()

  return (
      <MagicLinkWalletModalProvider
    	enableOtherWallets={false}
	magicLinkLogins={[{type: "emailOTP"}]}
	wallet={wallet}
	wallets={wallets}
	connect={connect}
      >
        {children}
      </MagicLinkWalletModalProvider>
  )
}
