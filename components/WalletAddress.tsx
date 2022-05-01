import { Chip } from "@mui/material";
import { useEthers } from "@usedapp/core";

export const WalletAddress = () => {
  const { account, deactivate } = useEthers();

  const isConnected = account !== undefined;
  const walletAddress = isConnected
    ? "Wallet Address: " + account?.toString()
    : "Nope";
  return (
    <div>
      {isConnected ? (
        <Chip
          size="small"
          label={walletAddress}
          color="success"
          onClick={deactivate}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
