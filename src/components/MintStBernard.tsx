import { Button, Chip } from "@mui/material";
import { useEthers, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import ScottsPuppyMill from "../chain-info/contracts/ScottsPuppyMill.json";
import { PuppyMillAddress } from "../chain-info/deployments";

export const MintStBernard = () => {
  const { account } = useEthers();
  const isConnected = account !== undefined;
  const { abi } = ScottsPuppyMill;
  const contractInterface = new utils.Interface(abi);
  const contractAddress = PuppyMillAddress;
  const contract = new Contract(contractAddress, contractInterface);

  const { state, send } = useContractFunction(contract, "createStBernard", {
    transactionName: "Adopt a St. Bernard",
  });
  const { status } = state;

  const mintPuppy = () => void send();

  return (
    <div>
      {isConnected ? (
        <Button variant="outlined" onClick={() => mintPuppy()}>
          Adopt a St. Bernard
        </Button>
      ) : undefined}
      <Chip size="small" label={status} color="primary" />
    </div>
  );
};
