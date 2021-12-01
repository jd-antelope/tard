import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

type Props = {
  markdown: string
}

export default function DocsPage({ markdown }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown 
        children={markdown} 
        remarkPlugins={[
          remarkGfm,
        ]} 
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={docco}
                language={match[1]}
                PreTag="view"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
        />
    </div>
  );
}