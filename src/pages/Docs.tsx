import { FC, useEffect } from 'react';
import { CodeBlock } from "@/components/ui/code-block";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-solidity";
import "prismjs/themes/prism-tomorrow.css";

const DocsSidebar = () => (
  <div className="w-64 fixed h-screen border-r border-border overflow-y-auto p-4">
    <nav className="space-y-1">
      <h3 className="font-medium mb-2">Documentation</h3>
      <a href="#quickstart" className="block py-1 text-sm hover:text-primary">Quickstart</a>
      <a href="#deploy" className="block py-1 text-sm hover:text-primary">Deploy First Contract</a>
      <a href="#ai-interface" className="block py-1 text-sm hover:text-primary">AI Interface Reference</a>
      <a href="#why-ai" className="block py-1 text-sm hover:text-primary">Why AI?</a>
      <a href="#safety" className="block py-1 text-sm hover:text-primary">Safety</a>
      <a href="#contribute" className="block py-1 text-sm hover:text-primary">Contribute</a>
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
            Learn how to build with the first L2 blockchain with native AI capabilities.
          </p>

          <section id="quickstart" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Quickstart</h2>
            <p className="mb-4">Get started with Moai Chain in minutes:</p>
            <CodeBlock>
              {`# Add network to your wallet
Chain ID: 80418041
RPC URL: https://rpc.moai.network
Currency: MOAI

# Get testnet tokens
Visit faucet.moai.network`}
            </CodeBlock>
          </section>

          <section id="deploy" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Deploy First Contract</h2>
            <p className="mb-4">Create and deploy an AI-enabled smart contract:</p>
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
          </section>

          <section id="ai-interface" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">AI Interface Reference</h2>
            <p className="mb-4">Core AI functions available at <code>0xA1A1A1</code>:</p>
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
              <li>Deterministic results - same input always produces same output</li>
              <li>Composable with other smart contracts</li>
              <li>No centralized AI providers or oracles needed</li>
              <li>Pay for compute with gas, no API keys required</li>
            </ul>
          </section>

          <section id="safety" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Safety</h2>
            <p className="mb-4">Important safety considerations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI responses are deterministic but may contain unexpected content</li>
              <li>Always validate and sanitize AI outputs before using in critical logic</li>
              <li>Consider rate limiting to prevent abuse</li>
              <li>Test thoroughly with different prompts and edge cases</li>
            </ul>
          </section>

          <section id="contribute" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Contribute</h2>
            <p className="mb-4">Help improve Moai Chain:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Source code: <a href="https://github.com/sloikaxyz/op-geth" className="text-primary hover:underline">github.com/sloikaxyz/op-geth</a></li>
              <li>Report issues and submit PRs</li>
              <li>Join our <a href="https://discord.gg/moai" className="text-primary hover:underline">Discord community</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>

        <Tabs defaultValue="getting-started" className="space-y-4">
          <TabsList className="space-x-2">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="wallet">Wallet Connection</TabsTrigger>
            <TabsTrigger value="development">Development Guide</TabsTrigger>
            <TabsTrigger value="onchain-ai">Onchain AI</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Moai Chain</CardTitle>
                <CardDescription>
                  Your gateway to onchain artificial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold">What is Moai Chain?</h3>
                    <p className="mt-2">
                      Moai Chain is a revolutionary Layer 2 blockchain solution that brings native AI capabilities directly onchain. 
                      Built on top of Ethereum, it enables developers to seamlessly integrate AI functionalities into their 
                      smart contracts and dApps through our 0xA1A1A1 precompile contract.
                    </p>
                    <p className="mt-2">
                      Unlike traditional blockchain AI solutions that rely on oracles or off-chain computation, 
                      Moai Chain executes AI operations directly within the EVM, ensuring true decentralization, 
                      deterministic results, and atomic composability with other smart contracts.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold">Quick Setup</h3>
                    <div className="mt-2 space-y-4">
                      <CodeBlock>
                        {`# 1. Install Moai CLI
npm install -g @moai/cli

# 2. Create new project
moai create my-ai-dapp

# 3. Navigate to project
cd my-ai-dapp

# 4. Start development
npm run dev`}
                      </CodeBlock>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li><strong>Native AI Execution:</strong> Call AI models directly from smart contracts</li>
                      <li><strong>EVM Compatibility:</strong> 100% compatible with Ethereum tools and standards</li>
                      <li><strong>AI Model Marketplace:</strong> Deploy and monetize AI models onchain</li>
                      <li><strong>Low-latency Inference:</strong> Optimized for fast AI computations</li>
                      <li><strong>Developer Tools:</strong> Comprehensive SDK, CLI, and documentation</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold">Network Details</h3>
                    <div className="bg-muted p-4 rounded-lg mt-2">
                      <ul className="space-y-1">
                        <li><strong>Chain ID:</strong> 80418041</li>
                        <li><strong>Currency Symbol:</strong> MOAI</li>
                        <li><strong>RPC URL:</strong> https://rpc.moai.network</li>
                        <li><strong>Block Time:</strong> 2 seconds</li>
                        <li><strong>Explorer:</strong> https://explorer.moai.network</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet">
            <Card>
              <CardHeader>
                <CardTitle>Connecting Your Wallet</CardTitle>
                <CardDescription>
                  Set up your wallet to interact with Moai Chain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Network Configuration</h3>
                <div className="space-y-2">
                  <p>Add Moai Chain to your wallet with these parameters:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <code>
                      Network Name: Moai Chain<br />
                      Chain ID: 80418041<br />
                      Currency Symbol: MOAI<br />
                      RPC URL: [Your RPC URL]
                    </code>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Supported Wallets</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>MetaMask</li>
                  <li>WalletConnect compatible wallets</li>
                  <li>Other EVM-compatible wallets</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development">
            <Card>
              <CardHeader>
                <CardTitle>Development Guide</CardTitle>
                <CardDescription>
                  Start building on Moai Chain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Setting Up Your Development Environment</h3>
                <div className="space-y-4">
                  <section>
                    <h4 className="font-medium">1. Install Required Dependencies</h4>
                    <CodeBlock>
                      {`# Using npm
npm install --save-dev @moai/sdk@latest @openzeppelin/contracts dotenv foundry-rs

# Using yarn
yarn add --dev @moai/sdk@latest @openzeppelin/contracts dotenv foundry-rs`}
                    </CodeBlock>
                  </section>

                  <section>
                    <h4 className="font-medium">2. Configure Foundry Environment</h4>
                    <CodeBlock>
                      {`# foundry.toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
chain_id = 80418041

[rpc_endpoints]
moai = "https://rpc.moai.network"

[etherscan]
moai = { key = "your_api_key", url = "https://explorer.moai.network" }`}
                    </CodeBlock>
                  </section>

                  <section>
                    <h4 className="font-medium">3. Initialize IAI Interface</h4>
                    <CodeBlock>
                      {`// Import and use the IAI interface to interact with onchain AI capabilities
import { IAI } from "@moai/interfaces";
import { ethers } from "ethers";

// Initialize provider and signer
const provider = new ethers.providers.JsonRpcProvider("https://rpc.moai.network");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

// Initialize AI interface with TypeScript typing
const ai = IAI.connect(aiContractAddress, signer);

// Example: Basic text generation
const result = await ai.inference({
  prompt: "Explain how blockchain works",
  maxTokens: 100,
  temperature: 0.7
});

// Example: Image generation
const image = await ai.generateImage({
  prompt: "A futuristic city with flying cars",
  size: "1024x1024",
  style: "photorealistic"
});

// Example: Code completion
const code = await ai.completeCode({
  language: "solidity",
  prompt: "Write a basic ERC20 token contract",
  maxTokens: 500
});

// Advanced: Streaming responses
const stream = await ai.inferenceStream({
  prompt: "Write a story",
  maxTokens: 1000
});

for await (const chunk of stream) {
  console.log(chunk); // Process chunks as they arrive
}

// TypeScript interfaces for type safety
interface InferenceParams {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
  model?: string;
  stream?: boolean;
}

interface ImageGenParams {
  prompt: string;
  size?: "256x256" | "512x512" | "1024x1024";
  style?: "photorealistic" | "artistic" | "anime";
  negative_prompt?: string;
}

interface CodeCompletionParams {
  language: string;
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

// Helper function for error handling
async function generateAIResponse(params: InferenceParams): Promise<string> {
  try {
    return await ai.inference(params);
  } catch (error) {
    if (error.code === 'RATE_LIMIT_EXCEEDED') {
      await sleep(1000);
      return generateAIResponse(params); // Retry
    }
    throw error;
  }
}`}
                    </CodeBlock>
                  </section>

                  <section>
                    <h4 className="font-medium">4. Implement AI-Enabled Smart Contract</h4>
                    <CodeBlock language="solidity">
                      {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@moai/interfaces/IAI.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract AIAgent is Ownable, ReentrancyGuard {
    IAI public immutable ai;
    uint256 public constant MAX_TOKENS = 1000;
    
    event AIInference(
        address indexed caller,
        string prompt,
        string response,
        uint256 timestamp
    );
    
    error InvalidAIResponse();
    error MaxTokensExceeded();
    
    constructor(address _aiAddress) {
        if (_aiAddress == address(0)) revert("Zero address");
        ai = IAI(_aiAddress);
    }
    
    function generateText(
        string calldata prompt,
        uint256 maxTokens,
        uint256 temperature
    ) external nonReentrant returns (string memory) {
        // Validate parameters
        if (maxTokens > MAX_TOKENS) revert MaxTokensExceeded();
        
        // Call the AI interface
        string memory response = ai.inference(
            prompt,
            maxTokens,
            temperature
        );
        
        // Validate response
        if (bytes(response).length == 0) revert InvalidAIResponse();
        
        emit AIInference(
            msg.sender,
            prompt,
            response,
            block.timestamp
        );
        
        return response;
    }
    
    // Allow contract to receive ETH for gas fees
    receive() external payable {}
    
    // Allow owner to withdraw ETH
    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        (bool success, ) = owner().call{value: balance}("");
        require(success, "Transfer failed");
    }
}`}
                    </CodeBlock>
                  </section>

                  <section>
                    <h4 className="font-medium">5. Deploy AI-Enabled Smart Contract</h4>
                    <CodeBlock language="solidity">
                      {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@moai/contracts/IAI.sol";

contract AIEnabled {
    IAI public ai;
    
    constructor(address _aiAddress) {
        ai = IAI(_aiAddress);
    }
    
    function generateText(string memory prompt) public returns (string memory) {
        return ai.generate(prompt);
    }
}`}
                    </CodeBlock>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onchain-ai">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Onchain AI</CardTitle>
                <CardDescription>
                  Why decentralized AI matters for developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Benefits of Onchain AI</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Trustless Execution:</strong> AI computations are verified by the network,
                    ensuring transparency and reliability
                  </li>
                  <li>
                    <strong>Composability:</strong> Combine AI capabilities with other smart contract
                    functionalities seamlessly
                  </li>
                  <li>
                    <strong>Decentralization:</strong> No reliance on centralized AI providers or oracles
                  </li>
                  <li>
                    <strong>Deterministic Results:</strong> Same input always produces the same output,
                    crucial for blockchain applications
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Use Cases</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered DeFi protocols</li>
                  <li>Intelligent NFT generation</li>
                  <li>On-chain content moderation</li>
                  <li>Automated decision-making systems</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
