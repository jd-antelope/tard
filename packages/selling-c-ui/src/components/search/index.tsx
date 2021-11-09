
import { InferProps } from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { View, Input, Text, Icon } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { SlSearchProps, SlSearchState } from '../../../types/search'
import { pxTransform } from '../../common/utils'

export default class SlSearch extends React.Component<SlSearchProps, SlSearchState> {
  public static defaultProps: SlSearchProps
  public static propTypes: InferProps<SlSearchProps>
  public constructor(props: SlSearchProps) {
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

  //点击抛出方法 是否跳转
  private handleClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
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
      fontSize,
      width = 220,
      height = 58,
    } = this.props
    const Tsearch = classNames('slc-search-Tsearch')
    const Fsearch = classNames('slc-search-Fsearch')
    return (
      this.state.isFocus ? <View className={Tsearch}
        style={{ width: `${pxTransform(width)}` }}
        onClick={this.props.isSkip ? this.handleClick.bind(this) : ""}
      >
        <Icon size={`${pxTransform(parseInt(String(30)))}`}
          type='search' className="slc-search-Tsearch-Icon"
          onClick={this.Confirm} />
        <Input
          style={{ height: `${pxTransform(height)}`, fontSize: `${pxTransform(fontSize)}` }}
          className="slc-search-Tsearch-search"
          value={this.state.inputVal}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          onConfirm={this.handleConfirm}
        />
        {this.state.inputVal === "" ? "" : <Text
          onClick={this.inputDelete}
          className="slc-search-Tsearch-inputDelete"
          style={{
            height: `${pxTransform(fontSize)}`,
            width: `${pxTransform(fontSize)}`,
            fontSize: `${pxTransform(fontSize)}`
          }}>x
        </Text>}
      </View> : <View className={Fsearch} style={{ width: `${pxTransform(width)}` }}
        onClick={this.props.isSkip ? this.handleClick.bind(this) : ""}
      >
        <Icon size={`${pxTransform(parseInt(String(30)))}`}
          type='search' className="slc-search-Fsearch-Icon"
          onClick={this.Confirm} />
        <Input
          style={{ height: `${pxTransform(height)}`, fontSize: `${pxTransform(fontSize)}` }}
          className="slc-search-Fsearch-search"
          value={this.state.inputVal}
          placeholder={placeholder}
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

SlSearch.defaultProps = {
  value: "",
  height: 58,
  placeholder: "搜索",
  disabled: false,
  isFocus: false,
  width: 220,
  fontSize: 26,
  // 是否跳转
  isSkip: false,
}

