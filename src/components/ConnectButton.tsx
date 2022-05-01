import { Button } from "@mui/material";
import { useEthers } from "@usedapp/core";

export const ConnectButton = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const isConnected = account !== undefined;

  return (
    <div>
      {isConnected ? (
        <Button variant="outlined" onClick={deactivate}>
          Disconnect
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect Your Wallet!
        </Button>
      )}
    </div>
  );
};
