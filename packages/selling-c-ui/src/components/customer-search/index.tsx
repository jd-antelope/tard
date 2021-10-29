
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Input, Text, Icon } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { SlCustomerSearchProps, SlCustomerSearchState } from '../../../types/customer-search'

export default class SlCustomerSearch extends React.Component<SlCustomerSearchProps, SlCustomerSearchState> {
    public static defaultProps: SlCustomerSearchProps
    public static propTypes: InferProps<SlCustomerSearchProps>

    public constructor(props: SlCustomerSearchProps) {
        super(props)
        this.state = {
            inputVal: '',       //提交按钮抛出数据
            isFocus: false,     //是否显示搜索按钮
        }
    }

    private handleBlur = (): void => {   //失去焦点
        //判断输入框内是否有内容
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

    private handleFocus = (): void => {    //获取焦点
        this.setState({
            isFocus: true
        })
    }

    private handleConfirm = (): void => {  //回车键确认提交
        this.props.onConfirm(this.state.inputVal)
    }

    private Confirm = (): void => {     //按钮确认提交
        this.props.onConfirm(this.state.inputVal)
    }

    private inputDelete = (): void => {     //清除内容
        this.setState({
            inputVal: '',
            isFocus: false
        })
    }

    private handleInput = (e: CommonEvent | ITouchEvent): void => {  // input 事件
        this.setState({
            inputVal: e.detail.value
        })
    }

    public render(): JSX.Element {

        const {
            placeholder,
            disabled,
        } = this.props

        return (

            this.state.isFocus ? <View className="Tsearch">
                <Icon size='20' type='search' className="Icon" />
                <Input
                    className="search"
                    value={this.state.inputVal}
                    placeholder={placeholder}
                    placeholder-class="phcolor"
                    disabled={disabled}
                    onFocus={this.handleFocus}
                    onInput={this.handleInput}
                    onBlur={this.handleBlur}
                    onConfirm={this.handleConfirm}
                />
                {this.state.inputVal === "" ? "" : <Text onClick={this.inputDelete} className="inputDelete">x</Text>}
                <Text onClick={this.Confirm}>搜索</Text>
            </View> : <View className="Fsearch">
                <Icon size='20' type='search' className="Icon" />
                <Input
                    className="search"
                    value={this.state.inputVal}
                    placeholder={placeholder}
                    placeholder-class="phcolor"
                    disabled={disabled}
                    onFocus={this.handleFocus}
                    onInput={this.handleInput}
                    onBlur={this.handleBlur}
                    onConfirm={this.handleConfirm}
                />
                <Text onClick={this.Confirm}>搜索</Text>
            </View>

        )
    }
}

SlCustomerSearch.defaultProps = {
    value: "",
    placeholder: "搜索团购标题",
    disabled: false,
    isFocus: false,

}

SlCustomerSearch.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    isFocus: PropTypes.bool,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onConfirm: PropTypes.func,

}
