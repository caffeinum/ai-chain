import { FC } from 'react';
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ 
  children, 
  className,
  language = "typescript" 
}) => {
  return (
    <div className={cn(
      "relative rounded-lg bg-muted p-4 font-mono text-sm",
      className
    )}>
      <div className="absolute right-4 top-4 text-xs text-muted-foreground">
        {language}
      </div>
      <pre>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};
