import { Button, Chip } from "@mui/material";
import { useEthers, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import ScottsPuppyMill from "../chain-info/contracts/ScottsPuppyMill.json";
import { PuppyMillAddress } from "../chain-info/deployments";

export const MintPug = () => {
  const { account /*chainId*/ } = useEthers();
  const isConnected = account !== undefined;
  const { abi } = ScottsPuppyMill;
  const contractInterface = new utils.Interface(abi);
  const contractAddress = PuppyMillAddress;
  const contract = new Contract(contractAddress, contractInterface);

  const { state, send } = useContractFunction(contract, "createPug", {
    transactionName: "Adopt a Pug",
  });
  const { status } = state;

  const mintPuppy = () => void send();

  return (
    <div>
      {isConnected ? (
        <Button variant="outlined" onClick={() => mintPuppy()}>
          Adopt a Pug
        </Button>
      ) : undefined}
      <Chip size="small" label={status} color="primary" />
    </div>
  );
};
