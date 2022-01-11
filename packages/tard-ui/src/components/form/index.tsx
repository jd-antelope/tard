import classNames from 'classnames'
import React from 'react'
import { Form } from '@tarojs/components'
import { SlFormProps } from '../../../types/form'

export default class SlForm extends React.Component<SlFormProps> {
  public static defaultProps: SlFormProps

  private onSubmit(): void {
    this.props.onSubmit && this.props.onSubmit(arguments as any)
  }

  private onReset(): void {
    this.props.onReset && this.props.onReset(arguments as any)
  }

  public render(): JSX.Element {
    const { customStyle, className, reportSubmit, border, round } = this.props
    const rootCls = classNames(
      'slc-form', 
      className,
      { 'slc-form-round': round },
      { 'slc-form-border': border }
    )

    return (
      <Form
        className={rootCls}
        style={customStyle}
        onSubmit={this.onSubmit.bind(this)}
        reportSubmit={reportSubmit}
        onReset={this.onReset.bind(this)}
      >
        {this.props.children}
      </Form>
    )
  }
}

SlForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false,
  border: false,
  round: false 
}
