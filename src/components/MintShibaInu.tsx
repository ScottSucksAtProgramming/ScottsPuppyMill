import { Button } from "@mui/material";
import { useEthers, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import ScottsPuppyMill from "../chain-info/contracts/ScottsPuppyMill.json";

export const MintShibaInu = () => {
  const { account /*chainId*/ } = useEthers();
  const isConnected = account !== undefined;
  const { abi } = ScottsPuppyMill;
  const contractInterface = new utils.Interface(abi);
  const contractAddress = "0x15e167090253e6967cD5651C7B192cc6983E078f";
  const contract = new Contract(contractAddress, contractInterface);

  const { state, send } = useContractFunction(contract, "createShibaInu", {
    transactionName: "Adopt a Shiba Inu",
  });
  const { status } = state;

  const mintPuppy = () => void send();

  return (
    <div>
      {isConnected ? (
        <Button variant="outlined" onClick={() => mintPuppy()}>
          Adopt a Shiba Inu
        </Button>
      ) : undefined}
    </div>
  );
};
