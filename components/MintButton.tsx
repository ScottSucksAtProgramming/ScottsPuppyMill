import { Button } from "@mui/material";
import { /*useEthers,*/ useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import SimpleCollectible from "../chain-info/contracts/SimpleCollectible.json";

export const MintButton = () => {
  const tokenUri =
    "ipfs://Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json";
  //const { account /*chainId*/ } = useEthers();
  // const isConnected = account !== undefined;
  const { abi } = SimpleCollectible;
  const contractInterface = new utils.Interface(abi);
  const contractAddress = "0x15e167090253e6967cD5651C7B192cc6983E078f";
  const contract = new Contract(contractAddress, contractInterface);

  const { state, send } = useContractFunction(contract, "createCollectible", {
    transactionName: "Mint Puppy",
  });
  const { status } = state;

  const callFunction = () => void send({ tokenUri });

  return (
    <div>
      <Button variant="outlined" onClick={callFunction()}>
        Mint Puppy!
      </Button>
      <br /> {status}
    </div>
  );
};
