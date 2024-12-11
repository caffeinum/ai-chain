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
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to integrate and use our AI Chain system effectively
        </p>

        <Tabs defaultValue="getting-started" className="space-y-4">
          <TabsList>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="connection">Connection Guide</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with AI Chain</CardTitle>
                <CardDescription>
                  Quick setup guide to get you running in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bun 1.0.0 or higher</li>
                  <li>Node.js 18+ (for development tools)</li>
                  <li>A modern web browser</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Installation</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <code>
                    # Clone the repository<br />
                    git clone https://github.com/your-repo/ai-chain<br />
                    <br />
                    # Install dependencies<br />
                    bun install<br />
                    <br />
                    # Start the development server<br />
                    bun run dev
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>
                  Understanding how AI Chain works under the hood
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Core Components</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Chain Executor</h4>
                    <p>
                      The central component that manages the execution flow of AI operations,
                      ensuring proper sequencing and data handling between different AI models.
                    </p>

                    <h4 className="font-medium mt-4">2. Model Integration Layer</h4>
                    <p>
                      Handles communication with various AI models, providing a unified
                      interface for model interactions and response processing.
                    </p>

                    <h4 className="font-medium mt-4">3. Data Pipeline</h4>
                    <p>
                      Manages data flow between components, handles preprocessing,
                      and ensures efficient data transformation throughout the chain.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connection">
            <Card>
              <CardHeader>
                <CardTitle>Connection Guide</CardTitle>
                <CardDescription>
                  Learn how to connect your application to the AI Chain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Authentication</h3>
                <p>
                  AI Chain uses API keys for authentication. Generate your API key
                  from the dashboard and include it in your requests.
                </p>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <code>
                    {`// Initialize AI Chain
import { AIChain } from '@ai-chain/client'

const chain = new AIChain({
  apiKey: 'your-api-key',
  endpoint: 'https://api.aichain.example.com'
})`}
                  </code>
                </div>

                <h3 className="text-xl font-semibold mt-6">Making Requests</h3>
                <p>
                  Send requests to the AI Chain using the client library:
                </p>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <code>
                    {`// Example request
const response = await chain.process({
  input: "Your input text",
  models: ["gpt-4", "claude-2"],
  options: {
    temperature: 0.7,
    maxTokens: 1000
  }
})`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Complete API documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Endpoints</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">POST /api/v1/process</h4>
                    <p className="text-sm text-muted-foreground">
                      Process a request through the AI Chain
                    </p>
                    <div className="mt-2">
                      <h5 className="font-medium">Request Body:</h5>
                      <pre className="bg-muted p-4 rounded-lg mt-2">
{`{
  "input": string,
  "models": string[],
  "options": {
    "temperature": number,
    "maxTokens": number
  }
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium">GET /api/v1/models</h4>
                    <p className="text-sm text-muted-foreground">
                      List available AI models
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Need help? Contact our support team
          </p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;