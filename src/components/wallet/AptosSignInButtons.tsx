import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { PontemWalletName } from '@manahippo/aptos-wallet-adapter';

export const AptosSignInButtons: React.FC = () => {
  const { connect, disconnect } = useWallet();

  return (
    <div>
    <button
      onClick={() => {
        connect(PontemWalletName);
      }}
    >
      Connect
    </button>
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect
    </button>
    </div>
  );
};
