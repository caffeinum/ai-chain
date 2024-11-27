import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Cpu, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="matrix-bg">
        <div className="container py-24 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent gradient-bg">
            AI-Powered L2 Chain
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Experience the first Layer 2 blockchain with native AI integration through smart contracts
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gradient-bg">
              Quick Start <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4">
            <Cpu className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">AI Precompile</h3>
            <p>Direct smart contract access to AI capabilities through the 0xA1A1A1 precompile</p>
          </Card>
          <Card className="p-6 space-y-4">
            <Code2 className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">Simple Integration</h3>
            <p>Easy-to-use interface for incorporating AI decision-making in your contracts</p>
          </Card>
          <Card className="p-6 space-y-4">
            <Zap className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold">Fast & Efficient</h3>
            <p>Built on OP Stack for high performance and low costs</p>
          </Card>
        </div>
      </div>

      {/* Quick Start */}
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Quick Start</h2>
        <Card className="p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">1. Connect to the Network</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              RPC URL: http://34.90.221.16
              <br />
              Chain ID: 42069
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">2. Bridge Your ETH</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono">
              Bridge Contract: 0x8FFa37c4493e9621fdCC4a0E6959d5c8f1B2F0c2
            </code>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">3. Interact with AI</h3>
            <code className="block bg-muted p-4 rounded-lg font-mono whitespace-pre">
              {`interface IAI {
    function chat(string calldata message) 
    external returns (string memory);
}`}
            </code>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8 flex justify-between items-center">
          <p>Built with ❤️ by the MoAI team</p>
          <div className="flex gap-4">
            <a href="https://twitter.com/caffeinum" className="hover:text-primary">Twitter</a>
            <a href="https://github.com/caffeinum" className="hover:text-primary">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;