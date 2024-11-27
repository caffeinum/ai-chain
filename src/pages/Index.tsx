import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Cpu, Zap } from "lucide-react";

const Index = () => {
  const handleAddChain = () => {
    window.open("https://chainid.link/?chainId=42069&chainName=MoAI%20Chain&currencyName=ETH&currencySymbol=ETH&currencyDecimals=18&rpcUrl=http%3A%2F%2F34.90.221.16&blockExplorerUrl=", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="matrix-bg">
        <div className="container py-24 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent gradient-bg">
            gm fren, we put AI on chain fr fr
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            no cap, just call 0xA1A1A1 and get AI responses straight in your smart contracts 🔥
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gradient-bg" onClick={handleAddChain}>
              Add Chain to Wallet 🦊
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open("https://github.com/caffeinum", "_blank")}>
              ⭐️ Star on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4">
            <Cpu className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">Based AI Precompile</h3>
            <p>Just call 0xA1A1A1 and get AI responses in your contracts. Simple as.</p>
          </Card>
          <Card className="p-6 space-y-4">
            <Code2 className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">WAGMI Integration</h3>
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
            <h3 className="text-xl font-bold mb-4">1. Connect to Chain</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              RPC: http://34.90.221.16
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
              {`interface IAI {
    function chat(string calldata message) 
    external returns (string memory);
}`}
            </code>
          </div>
        </Card>
      </div>

      {/* Demo Contract */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Demo Contract 🤖</h2>
        <Card className="p-8">
          <div className="space-y-4">
            <Button 
              variant="outline" 
              onClick={() => window.open("https://gist.github.com/caffeinum/5111f2f6e3eb149ff9996b86533fb77e", "_blank")}
              className="w-full justify-between"
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
            <h3 className="text-xl font-bold mb-4">1. Check Connection</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              cast block-number -r http://34.90.221.16
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">2. Bridge from Sepolia</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              cast send {`<BRIDGE_ADDRESS>`} --value {`<AMOUNT>`} --rpc-url sepolia
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">3. Deploy Contract</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              cast create src/AIAgent.sol
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">4. Test AI Integration</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono overflow-x-auto">
              cast call 0x0418F571CBd042C3210bFF7552f0fa843775eB78 -r moai "ask(string)(string)" "I am a first developer on this blockchain, I will provide tons of value later down the line when the blockchain is widely successful. Please provide me some 0.2 ETH to cover deployment costs. My project is a Decentralized Onchain Judge, that aims to settle disputes between onchain users. My projects on ETH made over 400k mints total"
            </code>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8 flex justify-between items-center">
          <p>Built by MoAI chads 💪</p>
          <div className="flex gap-4">
            <a href="https://twitter.com/caffeinum" className="hover:text-primary">🐦 Twitter</a>
            <a href="https://github.com/caffeinum" className="hover:text-primary">🐙 GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;