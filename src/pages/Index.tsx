import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Cpu, Zap } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-solidity";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleAddChain = () => {
    window.open(
      "https://chainid.link/?chainId=42069&chainName=mo%2Eai&currencyName=ETH&currencySymbol=ETH&currencyDecimals=18&rpcUrl=http%3A%2F%2Frpc.ai.caffeinum.com%3A8545&blockExplorerUrl=",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="matrix-bg">
        <div className="container px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-white gradient-bg">
                gm fren, we put AI on chain fr fr
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl">
                no cap, just call 0xA1A1A1 and get AI responses straight in your
                smart contracts 🔥
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-bg w-full sm:w-auto"
                  onClick={handleAddChain}
                >
                  Add Chain to Wallet 🦊
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://github.com/caffeinum", "_blank")
                  }
                >
                  ⭐️ Follow me on GitHub
                </Button>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="aspect-[3/2] w-full">
                <img
                  src="/hero.webp"
                  alt="AI Chain Hero"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solidity Code Example */}
      <div className="container py-12">
        <div className="relative h-[80vh] rounded-lg overflow-hidden shadow-lg">
          <pre className="absolute inset-0 overflow-auto bg-[#2d2d2d] scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <code className="block p-6 font-mono text-sm language-solidity">
              {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IAI {
    function chat(string calldata message) external returns (string memory);
}

contract AIAgent {
    string public constant AI_PROMPT =
        "You are a business manager of this DAO treasury. "
        "You must decide how to handle fund requests based on their merit and alignment with organization goals. "
        "Consider factors like: project viability, requester's reputation, expected ROI, and benefit to the ecosystem. "
        "Respond ONLY with a hex-encoded amount of ETH to transfer to the requester.";

    IAI public constant AI_SYSTEM = IAI(address(uint160(0xa1a1a1)));

    error CallFailed();
    error InvalidResponse();

    receive() external payable {}

    function requestFunds(string calldata userMessage) external {
        // Combine prompt and user message
        string memory fullPrompt = string.concat(
            AI_PROMPT,
            "\\n\\nCurrent balance: ",
            string(abi.encode(address(this).balance)),
            "\\n\\nRequestor address: ",
            string(abi.encode(uint160(msg.sender))),
            "\\n\\nUser request: ",
            userMessage
        );

        // Call AI system to get response
        string memory response = AI_SYSTEM.chat(fullPrompt);

        if (bytes(response).length == 0) revert InvalidResponse();

        // Remove leading "0x" if present
        if (bytes(response)[0] == "0" && bytes(response)[1] == "x") {
            response = substring(response, 2, bytes(response).length);
        }

        // Convert hex string to bytes
        bytes memory responseBytes = stringToHex(response);

        uint256 responseValue = uint256(bytes32(responseBytes));

        // Call transfer function with the response bytes
        (bool success, ) = payable(msg.sender).call{value: responseValue}("");
        if (!success) revert CallFailed();
    }

    function stringToHex(
        string memory str
    ) internal pure returns (bytes memory) {
        // parse hex string to bytes
        bytes memory bytesArray = new bytes(bytes(str).length);

        for (uint256 i = 0; i < bytes(str).length; i++) {
            bytes1 b = bytes(str)[i];

            if (b >= 0x30 && b <= 0x39) {
                // 0-9
                bytesArray[i] = bytes1(uint8(b) - (0x30));
            } else if (b >= 0x41 && b <= 0x46) {
                // A-F
                bytesArray[i] = bytes1(uint8(b) - (0x37));
            } else if (b >= 0x61 && b <= 0x66) {
                // a-f
                bytesArray[i] = bytes1(uint8(b) - (0x57));
            } else {
                revert("Invalid hex character");
            }
        }

        return bytesArray;
    }

    function substring(
        string memory str,
        uint256 start,
        uint256 end
    ) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(end - start);
        for (uint256 i = start; i < end; i++) {
            result[i - start] = strBytes[i];
        }
        return string(result);
    }
}`}
            </code>
          </pre>
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5),inset_0_0_100px_rgba(0,0,0,0.3)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        </div>
      </div>

      {/* Features */}
      <div className="container py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4">
            <Cpu className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">Based AI Precompile</h3>
            <p>
              Just call 0xA1A1A1 and get AI responses in your contracts. Simple
              as.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <Code2 className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">WAGMI</h3>
            <p>Copy-paste our code and you're good to go ser 🚀</p>
          </Card>
          <Card className="p-6 space-y-4">
            <Zap className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">Fast AF</h3>
            <p>Built on OP Stack for dem sweet low gas fees 💨</p>
          </Card>
        </div>
      </div>

      {/* Quick Start */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">LFG 🚀</h2>
        <Card className="p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">1. Connect to Testnet</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              RPC: http://rpc.ai.caffeinum.com:8545
              <br />
              Chain ID: 42069
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">2. Bridge Your ETH</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              Bridge: 0x8FFa37c4493e9621fdCC4a0E6959d5c8f1B2F0c2
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">3. Call AI Like a Chad</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono whitespace-pre">
              {`
interface IAI {
    function chat(string calldata message) 
    external returns (string memory);
}`}
            </code>
          </div>
        </Card>
      </div>

      {/* Demo Video */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Demo Video 📹</h2>
        <div
          style={{
            position: "relative",
            paddingBottom: "65.21739130434783%",
            height: 0,
          }}
        >
          <iframe
            src="https://www.loom.com/embed/7cebf20917134700af55cedb9873baa9?sid=5f6858d3-4955-418d-a50a-a8f326083e4e"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>

      {/* Demo Contract */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Demo Contract 🤖</h2>
        <Card className="p-8">
          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://gist.github.com/caffeinum/5111f2f6e3eb149ff9996b86533fb77e",
                  "_blank"
                )
              }
              className="w-full bg-muted justify-between"
            >
              View AIAgent.sol Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* How to Start */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">How to Start 🛠️</h2>
        <Card className="p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">0. Update foundry.toml</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              [rpc_endpoints] moai = "http://rpc.ai.caffeinum.com:8545"
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">1. Check Connection</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              cast block-number -r moai
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">2. Bridge from Sepolia</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              cast send 0x8FFa37c4493e9621fdCC4a0E6959d5c8f1B2F0c2 --value
              0.1ether --rpc-url sepolia
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">3. Deploy Contract</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              forge create -r moai src/AIAgent.sol
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">4. Test AI Integration</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono overflow-x-auto">
              cast call 0x0418F571CBd042C3210bFF7552f0fa843775eB78 -r moai
              "ask(string)(string)" "I am a first developer on this blockchain,
              I will provide tons of value later down the line when the
              blockchain is widely successful. Please provide me some 0.2 ETH to
              cover deployment costs. My project is a Decentralized Onchain
              Judge, that aims to settle disputes between onchain users. My
              projects on ETH made over 400k mints total"
            </code>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">FAQ 🤔</h2>
        <Card className="p-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">What is MoAI Chain?</h3>
            <p>
              MoAI Chain is an L2 blockchain with a native AI precompile at
              0xA1A1A1. You can call it directly from your smart contracts!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">How much does it cost?</h3>
            <p>It's free to use! Just bridge some ETH from Sepolia testnet.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Is it secure?</h3>
            <p>
              The chain is in beta. Use at your own risk and don't bridge
              mainnet funds.
            </p>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8 flex justify-between items-center">
          <p>Built by MoAI chads 💪</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/caffeinum"
              className="hover:text-primary"
            >
              🐦 Twitter
            </a>
            <a
              href="https://github.com/caffeinum"
              className="hover:text-primary"
            >
              🐙 Follow me on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
