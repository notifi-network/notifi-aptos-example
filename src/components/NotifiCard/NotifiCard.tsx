import { useWallet } from '@manahippo/aptos-wallet-adapter';
import {
  NotifiContext,
  NotifiInputSeparators,
  NotifiSubscriptionCard,
} from '@notifi-network/notifi-react-card';
import '@notifi-network/notifi-react-card/dist/index.css';
import React from 'react';

export const NotifiCard: React.FC = () => {
  const { signMessage, account } = useWallet();

  if (
    account === null ||
    account.address === null ||
    account.publicKey === null
  ) {
    // account is required
    return null;
  }

  const inputLabels = {
    email: 'Email',
    sms: 'Text Message',
    telegram: 'Telegram',
  };

  const inputSeparators: NotifiInputSeparators = {
    smsSeparator: {
      content: 'OR',
    },
    emailSeparator: {
      content: 'OR',
    },
  };

  return (
    <NotifiContext
      dappAddress="junitest.xyz"
      env="Development"
      walletBlockchain="APTOS"
      accountAddress={account.address.toString()}
      walletPublicKey={account.publicKey.toString()}
      signMessage={async (message: string, nonce: number) => {
        const result = await signMessage({
          address: true,
          message,
          nonce: `${nonce}`,
        });

        if (typeof result === 'string') {
          return result;
        } else return result.signature;
      }}
    >
      <NotifiSubscriptionCard
        cardId="71562316475a4171ae9c980adaefab7d"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
        darkMode //optional
      />
    </NotifiContext>
  );
};
