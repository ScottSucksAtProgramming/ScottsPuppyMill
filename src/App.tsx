import React from "react";
import logo from "./st-bernard.png";
import "./App.css";
import { ChainId, DAppProvider } from "@usedapp/core";
import { ConnectButton } from "./components/ConnectButton";
import { WalletAddress } from "./components/WalletAddress";
import { MintPug } from "./components/MintPug";
import { MintStBernard } from "./components/MintStBernard";
import { MintShibaInu } from "./components/MintShibaInu";

function App() {
  return (
    <DAppProvider config={{ supportedChains: [ChainId.Rinkeby] }}>
      <div className="App">
        <header className="App-header">
          <div>
            <h2>Scott K's NFT Puppy Mill!</h2>
            <h6>
              Connect your wallet.
              <br />
              Make sure it's connected to the Rinkey Testnet.
              <br />
              You can mint your own puppy with the button below!
              <br />
              If you need Etherum you can use the{" "}
              <a
                href="https://rinkebyfaucet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faucet
              </a>
              .
            </h6>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <WalletAddress />
          </p>
          <div>
            <p>
              <div>
                <ConnectButton />
              </div>
              <div>
                <MintStBernard />
                <MintShibaInu />
                <MintPug />
              </div>
            </p>
          </div>
          <a
            className="App-link"
            href="https://i.giphy.com/media/cNz1mN9uFJ31tv7mOQ/giphy.webp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scott Sucks at UX
          </a>
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
