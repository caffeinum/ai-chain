import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-solidity";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { FC, useEffect } from "react";

const DocsSidebar = () => (
  <div className="w-64 fixed h-screen border-r border-border overflow-y-auto p-4">
    <nav className="space-y-1">
      <h3 className="font-medium mb-2">Documentation</h3>
      <a href="#quickstart" className="block py-1 text-sm hover:text-primary">
        Quickstart
      </a>
      <a href="#deploy" className="block py-1 text-sm hover:text-primary">
        Deploy First Contract
      </a>
      <a href="#ai-interface" className="block py-1 text-sm hover:text-primary">
        AI Interface Reference
      </a>
      <a href="#why-ai" className="block py-1 text-sm hover:text-primary">
        Why AI?
      </a>
      <a href="#safety" className="block py-1 text-sm hover:text-primary">
        Safety
      </a>
      <a href="#contribute" className="block py-1 text-sm hover:text-primary">
        Contribute
      </a>
    </nav>
  </div>
);

const Docs: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <DocsSidebar />
      <div className="pl-64">
        <div className="max-w-3xl mx-auto py-12 px-8">
          <h1 className="text-4xl font-bold mb-6">Moai Chain Documentation</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Learn how to build with the first L2 blockchain with native AI
            capabilities.
          </p>

          <section id="quickstart" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Quickstart</h2>
            <p className="mb-4">Get started with Moai Chain in minutes:</p>
            <CodeBlock>
              {`# Add network to your wallet
Chain ID: 80418041
RPC URL: https://rpc.moai.ltd
Currency: MOAI

# Get testnet tokens
Visit faucet.moai.ltd`}
            </CodeBlock>
          </section>

          <section id="deploy" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Deploy First Contract</h2>
            
            <h3 className="text-xl font-semibold mb-3">1. Get MOAI tokens</h3>
            <p className="mb-4">
              To deploy contracts on Moai Chain, you'll need MOAI tokens. You can get them in two ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the bridge at <a href="https://bridge.moai.ltd" className="text-primary hover:underline">bridge.moai.ltd</a> to bridge ETH from Optimism</li>
              <li>Get testnet tokens from <a href="https://faucet.moai.ltd" className="text-primary hover:underline">faucet.moai.ltd</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Set up Foundry</h3>
            <p className="mb-4">
              We'll use Foundry for development. First, install it:
            </p>
            <CodeBlock language="bash">
              {`curl -L https://foundry.paradigm.xyz | bash
foundryup`}
            </CodeBlock>

            <h3 className="text-xl font-semibold mb-3 mt-4">3. Create new project</h3>
            <p className="mb-4">
              Initialize a new Foundry project:
            </p>
            <CodeBlock language="bash">
              {`forge init ai-greeter
cd ai-greeter`}
            </CodeBlock>

            <h3 className="text-xl font-semibold mb-3 mt-4">4. Configure Foundry</h3>
            <p className="mb-4">
              Create foundry.toml with Moai Chain configuration:
            </p>
            <CodeBlock>
              {`[profile.default]
src = "src"
out = "out"
libs = ["lib"]

[rpc_endpoints]
moai = "https://rpc.moai.ltd"

[etherscan]
moai = { key = "" } # No key needed for Moai Chain`}
            </CodeBlock>

            <h3 className="text-xl font-semibold mb-3 mt-4">5. Create Contract</h3>
            <p className="mb-4">
              Create src/AIGreeter.sol:
            </p>
            <CodeBlock language="solidity">
              {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@moai/interfaces/IAI.sol";

contract AIGreeter {
    IAI public ai;
    
    constructor(address _aiAddress) {
        ai = IAI(_aiAddress);
    }
    
    function greet(string memory name) public view returns (string memory) {
        return ai.chat("Generate a friendly greeting for " + name);
    }
}`}
            </CodeBlock>

            <h3 className="text-xl font-semibold mb-3 mt-4">6. Deploy Contract</h3>
            <p className="mb-4">
              Deploy to Moai Chain using your private key (replace with your actual key):
            </p>
            <CodeBlock language="bash">
              {`forge create --rpc-url https://rpc.moai.ltd \
  --private-key YOUR_PRIVATE_KEY \
  src/AIGreeter.sol:AIGreeter \
  --constructor-args 0xA1A1A1`}
            </CodeBlock>

            <p className="mt-4 text-sm text-muted-foreground">
              Note: The AI interface is available at address 0xA1A1A1 on Moai Chain
            </p>
          </section>

          <section id="ai-interface" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">AI Interface Reference</h2>
            <p className="mb-4">
              Core AI functions available at <code>0xA1A1A1</code>:
            </p>
            <CodeBlock language="solidity">
              {`interface IAI {
    // Generate text response
    function chat(string memory prompt) external view returns (string memory);
    
    // Generate image (returns IPFS hash)
    function generateImage(string memory prompt) external returns (string memory);
    
    // Get embedding vector
    function getEmbedding(string memory text) external view returns (uint256[] memory);
}`}
            </CodeBlock>
          </section>

          <section id="why-ai" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Why AI?</h2>
            <p className="mb-4">Benefits of onchain AI:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Deterministic results - same input always produces same output
              </li>
              <li>Composable with other smart contracts</li>
              <li>No centralized AI providers or oracles needed</li>
              <li>Pay for compute with gas, no API keys required</li>
            </ul>
          </section>

          <section id="safety" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Safety</h2>
            <p className="mb-4">Important safety considerations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                AI responses are deterministic but may contain unexpected
                content
              </li>
              <li>
                Always validate and sanitize AI outputs before using in critical
                logic
              </li>
              <li>Consider rate limiting to prevent abuse</li>
              <li>Test thoroughly with different prompts and edge cases</li>
            </ul>
          </section>

          <section id="contribute" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Contribute</h2>
            <p className="mb-4">Help improve Moai Chain:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Source code:{" "}
                <a
                  href="https://github.com/sloikaxyz/op-geth"
                  className="text-primary hover:underline"
                >
                  github.com/sloikaxyz/op-geth
                </a>
              </li>
              <li>Report issues and submit PRs</li>
              <li>
                Join our{" "}
                <a
                  href="https://discord.gg/moai"
                  className="text-primary hover:underline"
                >
                  Discord community
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Need help? Join our developer community
          </p>
          <Button variant="outline">Join Community</Button>
        </div>
      </div>
    </div>
  );
};

export default Docs;
