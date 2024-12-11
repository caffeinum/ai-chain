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
import { CodeBlock } from "@/components/ui/code-block";

const Examples: FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🌊 Moai Chain Examples</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore practical examples and use cases for building with Moai Chain's AI capabilities.
        </p>

        {/* Rest of the current Docs.tsx content */}
      </div>
    </div>
  );
};

export default Examples;
