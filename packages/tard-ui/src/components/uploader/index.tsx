import classNames from 'classnames'
import { InferProps } from 'prop-types'
import React, { Fragment } from 'react'
import SlIcon from '../icon/index'
import { Image, View, Video } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'

import { SlUploaderProps, SlUploaderState, SlVideoInterface, File } from '../../../types/uploader'
import { uuid } from '../../common/utils'

interface MatrixFile extends Partial<File> {
	type: 'blank' | 'btn'
	uuid: string

}
const MEDIA_TYPES = {
	camera: '图片',
	video: '视频'
}

// 生成 jsx 二维矩阵
const generateMatrix = (
	files: MatrixFile[],
	col: number,
	showAddBtn: boolean
): MatrixFile[][] => {
	const matrix: Array<MatrixFile>[] = []
	const length = showAddBtn ? files.length + 1 : files.length
	const row = Math.ceil(length / col)
	for (let i = 0; i < row; i++) {
		if (i === row - 1) {
			// 最后一行数据加上添加按钮
			const lastArr = files.slice(i * col)
			if (lastArr.length < col) {
				if (showAddBtn) {
					lastArr.push({ type: 'btn', uuid: uuid() })
				}
				// 填补剩下的空列
				for (let j = lastArr.length; j < col; j++) {
					lastArr.push({ type: 'blank', uuid: uuid() })
				}
			}
			matrix.push(lastArr)
		} else {
			matrix.push(files.slice(i * col, (i + 1) * col))
		}
	}
	return matrix
}

const ENV = Taro.getEnv()

export default class SlUploader extends React.Component<SlUploaderProps, SlUploaderState> {
	public static defaultProps: SlUploaderProps
	public static propTypes: InferProps<SlUploaderProps>
	private constructor(props) {
		super(props)
		this.state = {
			playObj: {} as SlVideoInterface
		}
		// Taro.createVideoContext('player');
	}

	private chooseFile = (): void => {
		const { mediaType = 'camera', files = [], multiple, sizeType, sourceType, maxDuration } = this.props
		const filePathName = ENV === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'
		const count = multiple ? 99 : 1
		const params: any = {
			sizeType: ['original'],
			sourceType: ['album', 'camera'],
		}
		if (multiple) {
			params.count = 99
		}
		if (count) {
			params.count = count
		}
		if (sizeType) {
			params.sizeType = sizeType
		}
		if (sourceType) {
			params.sourceType = sourceType
		}
		if (maxDuration) {
			params.maxDuration = maxDuration
		}
		if (mediaType === 'camera') {
			Taro.chooseImage(params)
				.then(res => {
					const targetFiles = res.tempFilePaths.map((path, i) => ({
						url: path,
						file: res[filePathName][i]
					}))
					const newFiles = files.concat(targetFiles)
					this.props.onChange(newFiles, 'add')
				})
				.catch(this.props.onFail)
		} else {
			params.camera = 'back'
			Taro.chooseVideo(params)
				.then((res: any) => {
					this.setState({
						playObj: { url: res.thumbTempFilePath, file: res.tempFilePath }
					})
					const newFiles = files.concat([{ url: res.thumbTempFilePath, file: res.tempFilePath }])
					this.props.onChange(newFiles, 'add')
				})
				.catch(this.props.onFail)
		}

	}

	private handleImageClick = (idx: number): void => {
		this.props.onImageClick &&
			this.props.onImageClick(idx, this.props.files[idx])
	}

	private handleRemoveImg = (idx: number, event: ITouchEvent): void => {
		event.stopPropagation()
		event.preventDefault()
		const { files = [] } = this.props
		if (ENV === Taro.ENV_TYPE.WEB) {
			window.URL.revokeObjectURL(files[idx].url)
		}
		const newFiles = files.filter((_, i) => i !== idx)
		this.props.onChange(newFiles, 'remove', idx)
	}

	public render(): JSX.Element {
		const {
			className,
			customStyle,
			files,
			mode,
			mediaType = 'camera',
			length = 3,
			maxCount = 3,
			showAddBtn = true,
			children,
		} = this.props
		const rowLength = (mediaType === 'video' || length <= 0) ? 1 : length
		// 行数
		const matrix = generateMatrix(files as MatrixFile[], rowLength, showAddBtn)
		const rootCls = classNames('slc-uploader-picker', className)

		return (
			<View className={rootCls} style={customStyle}>
				{matrix.map((row, i) => (
					<View className='slc-uploader-picker__flex-box' key={i + 1}>
						{row.map((item, j) =>
							item.url ? (
								<View
									className='slc-uploader-picker__flex-item'
									key={i * length + j}
								>
									<View className='slc-uploader-picker__item'>
										<View
											className='slc-uploader-picker__remove-btn'
											onClick={this.handleRemoveImg.bind(this, i * length + j)}
										/>
										{
											mediaType === 'camera' ?
												<Image
													className='slc-uploader-picker__preview-img'
													mode={mode}
													src={item.url}
													onClick={this.handleImageClick.bind(this, i * length + j)}
												/> :
												<Video
													id='video'
													className='slc-uploader-picker__preview-video'
													src={this.state.playObj.file}
													poster={this.state.playObj.url}
													controls={true}
													autoplay={false}
													showFullscreenBtn={false}
													loop={false}
													muted={false} />
										}
									</View>
								</View>
							) : (
								<Fragment>
									{files.length < maxCount ?
										<View
											className='slc-uploader-picker__flex-item'
											key={'empty_' + i * length + j}
										>
											{item.type === 'btn' && (
												<View
													className='slc-uploader-picker__item slc-uploader-picker__choose-btn'
													onClick={this.chooseFile}
												>
													{
														children ? children:
															<Fragment>
																<SlIcon value={mediaType} color="#666666" size={32} />
																<View className='text'>
																	添加{MEDIA_TYPES[mediaType]}{maxCount > 1 && `(${files.length}/${maxCount})`}
																</View>
															</Fragment>
													}
												</View>
											)}
										</View> : null}
								</Fragment>
							)
						)}
					</View>
				))}
			</View>
		)
	}
}

SlUploader.defaultProps = {
	className: '',
	customStyle: '',
	files: [],
	mode: 'aspectFill',
	mediaType: 'camera',
	showAddBtn: true,
	multiple: false,
	maxDuration: 30,
	length: 3,
	maxCount: 3,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChange: (): void => { }
}
