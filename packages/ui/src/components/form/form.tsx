import classNames from 'classnames'
import React, { FC } from 'react'
import { Form } from '@tarojs/components'
import CompContainer from '../../common/comp-container'
import { FormProps } from './type'

const FormComponent: FC<FormProps> = ({
  className = '',
  customStyle = '',
  reportSubmit = false,
  border = false,
  round = false,
  onReset = () => {},
  onSubmit = () => {},
  children,
  customizeStyle = ''
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
    <CompContainer customizeStyle={ customizeStyle }>
      <Form
        className={rootCls}
        style={customStyle}
        onSubmit={onSubmitCallback}
        reportSubmit={reportSubmit}
        onReset={onResetCallback}
      >
        {children}
      </Form>
    </CompContainer>
  )
}

export default FormComponent