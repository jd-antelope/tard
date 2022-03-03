import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const MdToReact: FC<any> = ({ route }) => {
    return <ReactMarkdown
        // import('@ui/button/README.zh-CN.md?raw')
        children={route.component || 'readme'}
        remarkPlugins={[remarkGfm]}
        components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        PreTag="view"
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            },
        }}
    ></ReactMarkdown>
}

export default MdToReact