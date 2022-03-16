import classNames from 'classnames'
import React, { FC } from 'react'
import { Form } from '@tarojs/components'
import { FormProps } from './type'

const FormComponent: FC<FormProps> = ({
  className = '',
  customStyle = '',
  reportSubmit = false,
  border = false,
  round = false,
  onReset = () => {},
  onSubmit = () => {},
  children
}) => {

  const onSubmitCallback = (event) => {
    onSubmit && onSubmit(event)
  }

  const onResetCallback = (event) => {
    onReset && onReset(event)
  }

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
      onSubmit={onSubmitCallback}
      reportSubmit={reportSubmit}
      onReset={onResetCallback}
    >
      {children}
    </Form>
  )
}

export default FormComponent