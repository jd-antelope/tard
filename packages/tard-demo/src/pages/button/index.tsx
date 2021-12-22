import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';


const Button: FC = () => {


	return (
		<View className="container">
			<DocsHeader title='Button'></DocsHeader>
			<View className='doc-body'>
				<View className='doc-body-content-tip'>按钮类型</View>
				<View className='button-box'>
					<SlButton className='el' type="primary">主要按钮</SlButton>
					<SlButton className='el' type="info">信息按钮</SlButton>
					<SlButton className='el' type="default">默认按钮</SlButton>
					<SlButton className='el' type="danger">危险按钮</SlButton>
					<SlButton className='el' type="warning">警告按钮</SlButton>
					<SlButton className='el' type="success">成功按钮</SlButton>
				</View>

				<View className='doc-body-content-tip'>边框按钮</View>
				<View className='button-box'>
					<SlButton className='el' border type="primary">主要按钮</SlButton>
					<SlButton className='el' border type="info">信息按钮</SlButton>
					<SlButton className='el' border type="warning">警告按钮</SlButton>
					<SlButton className='el' border type="danger">危险按钮</SlButton>

				</View>

		
				<View className='doc-body-content-tip'>按钮形状</View>
				<View className='button-box'>
					<SlButton className='el' round='rect' type="primary">主要按钮</SlButton>
					<SlButton className='el' type="info">信息按钮</SlButton>
					<SlButton className='el'  round='circle' type="warning">警告按钮</SlButton>
				</View>

				<View className='doc-body-content-tip'>自定义背景颜色</View>
				<View className='button-box'>
					<SlButton className='el' fillColor='#6F16E8'>单色按钮</SlButton>
					<SlButton className='el' fillColor='linear-gradient(90deg, rgba(133,44,255,1) 0%,rgba(97,16,206,1) 100%)'>渐变按钮</SlButton>
					<SlButton className='el' border fillColor='#6F16E8'>单色按钮</SlButton>

				</View>

				<View className='doc-body-content-tip'>自定义文字颜色</View>
				<View className='button-box'>
					<SlButton className='el'  color="red">红色文字</SlButton>
					<SlButton className='el' color='green'>绿色文字</SlButton>
					<SlButton className='el' color='blue' >蓝色文字</SlButton>
				</View>

				<View className='doc-body-content-tip'>自定义圆角</View>
				<View className='button-box'>
					<SlButton className='el' type='primary'>默认</SlButton>
					<SlButton className='el' radius={24} type='info'>24px</SlButton>
					<SlButton className='el' radius={36} type='warning'>36px</SlButton>
				</View>
				
				<View className='doc-body-content-tip'>禁用状态</View>
				<View className='button-box'>
					<SlButton className='el' disabled border type="primary">主要按钮</SlButton>
					<SlButton className='el' disabled border type="info">信息按钮</SlButton>
					<SlButton className='el' disabled border type="warning">警告按钮</SlButton>
					<SlButton className='el' disabled type="danger">危险按钮</SlButton>
					<SlButton className='el' disabled type="default">默认按钮</SlButton>
				</View>

				<View className='doc-body-content-tip'>按钮尺寸</View>
				<View className='button-box'>
					<SlButton className='el' full type='primary'>通栏按钮</SlButton>
					<SlButton className='el' size='large' type='info'>大型按钮</SlButton>
					<SlButton className='el' size='normal' type='danger'>普通按钮</SlButton>
					<SlButton className='el' size='small' type='warning'>小型按钮</SlButton>
					<SlButton className='el' size='mini' type='success'>迷你按钮</SlButton>
				</View>
			</View>

		</View>
	);
};

export default memo(Button);