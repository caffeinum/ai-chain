import { FC } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocsPage: FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Moai Chain Documentation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to integrate and develop with Moai Chain - the first blockchain with native AI capabilities
        </p>

        <Tabs defaultValue="getting-started" className="space-y-4">
          <TabsList>
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
                <h3 className="text-xl font-semibold">What is Moai Chain?</h3>
                <p>
                  Moai Chain is a revolutionary blockchain platform that brings AI capabilities directly onchain. 
                  It enables developers to integrate AI functionalities into their smart contracts and dApps 
                  without relying on external oracles or centralized services.
                </p>

                <h3 className="text-xl font-semibold mt-6">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Native AI execution environment</li>
                  <li>EVM compatibility</li>
                  <li>Decentralized AI model marketplace</li>
                  <li>Low-latency inference</li>
                  <li>Chain ID: 80418041</li>
                </ul>
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
                <h3 className="text-xl font-semibold">Setting Up Your Environment</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">1. Foundry Configuration</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code>
                      {`// foundry.toml
[profile.default]
chain_id = 80418041
// ... other config`}
                    </code>
                  </div>

                  <h4 className="font-medium mt-4">2. IAI Interface Integration</h4>
                  <p>
                    Import and use the IAI interface to interact with onchain AI capabilities:
                  </p>
                  <div className="bg-muted p-4 rounded-lg mt-2">
                    <code>
                      {`import { IAI } from "@moai/interfaces";

// Initialize AI interface
const ai = IAI(aiContractAddress);

// Make AI calls
const result = await ai.inference(params);`}
                    </code>
                  </div>
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

export default DocsPage;