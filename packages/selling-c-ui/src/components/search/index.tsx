
import { InferProps } from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { View, Input, Text, Icon } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { SlCustomerSearchProps, SlCustomerSearchState } from '../../../types/search'

export default class SlCustomerSearch extends React.Component<SlCustomerSearchProps, SlCustomerSearchState> {
  public static defaultProps: SlCustomerSearchProps
  public static propTypes: InferProps<SlCustomerSearchProps>
  public constructor(props: SlCustomerSearchProps) {
    super(props)
    this.state = {
      // 提交按钮抛出数据
      inputVal: '',
      // 是否显示搜索按钮 
      isFocus: false,
    }
  }

  // 失去焦点
  private handleBlur = (): void => {
    // 判断输入框内是否有内容
    if (this.state.inputVal !== "") {
      this.setState({
        isFocus: true
      })
    } else {
      this.setState({
        isFocus: false
      })
    }
  }

  // 获取焦点
  private handleFocus = (): void => {
    this.setState({
      isFocus: true
    })
  }

  // 回车键确认提交
  private handleConfirm = (): void => {
    this.props.onConfirm(this.state.inputVal)
  }

  // 按钮确认提交
  private Confirm = (): void => {
    this.props.onConfirm(this.state.inputVal)
  }

  // 清除内容
  private inputDelete = (): void => {
    this.setState({
      inputVal: '',
      isFocus: false
    })
  }

  // input事件
  private handleInput = (e: CommonEvent | ITouchEvent): void => {
    this.setState({
      inputVal: e.detail.value
    })
  }

  public render(): JSX.Element {

    const {
      placeholder,
      disabled,
    } = this.props
    const Tsearch = classNames('slc-customer-search-Tsearch')
    const Fsearch = classNames('slc-customer-search-Fsearch')
    return (
      this.state.isFocus ? <View className={Tsearch}>
        <Icon size='30' type='search' className="slc-customer-search-Tsearch-Icon" onClick={this.Confirm}/>
        <Input
          style={{height:`${this.props.height}`}}
          className="slc-customer-search-Tsearch-search"
          value={this.state.inputVal}
          placeholder={placeholder}
          placeholder-class="slc-customer-search-Tsearch-phcolor"
          disabled={disabled}
          onFocus={this.handleFocus}                        
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          onConfirm={this.handleConfirm}
        />
        {this.state.inputVal === "" ? "" : <Text
          onClick={this.inputDelete}
          className="slc-customer-search-Tsearch-inputDelete">x
        </Text>}
      </View> : <View className={Fsearch}>
        <Icon size='30' type='search' className="slc-customer-search-Fsearch-Icon" onClick={this.Confirm}/>
        <Input
          style={{height:`${this.props.height}`}}
          className="slc-customer-search-Fsearch-search"
          value={this.state.inputVal}
          placeholder={placeholder}
          placeholder-class="slc-customer-search-Fsearch-phcolor"
          disabled={disabled}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          onConfirm={this.handleConfirm}
        />
      </View>

    )
  }
}

SlCustomerSearch.defaultProps = {
  value: "",
  height: "66px",
  placeholder: "搜索",
  disabled: false,
  isFocus: false,

}

