import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { SlModalContentProps } from '../../../../types/sl-modal'

export default class SlModalHeader extends React.Component<SlModalContentProps> {
  public render (): JSX.Element {
    const rootClass = classNames('slc-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}