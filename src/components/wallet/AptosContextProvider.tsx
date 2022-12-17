import React, { ReactNode } from "react";
import {
  PontemWalletAdapter,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  WalletProvider,
} from '@manahippo/aptos-wallet-adapter';

const wallets = () => [
  new PontemWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new FewchaWalletAdapter(),
  new HippoWalletAdapter(),
  new HippoExtensionWalletAdapter(),
];

const AptosContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <WalletProvider
      wallets={wallets()}
      onError={(error: Error) => {
        console.log('Handle Error Message', error)
      }}>
        {children}
    </WalletProvider>
  );
};

export default AptosContextProvider;
