import classNames from 'classnames'
import React, { Fragment, FC, useState } from 'react'
import SlIcon from '../icon/index'
import { Image, View, Video } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { UploaderProps, VideoInterface, File } from './type'
import { uuid } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import { CssPrefix } from '../../common'

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

const Uploader: FC<UploaderProps> = ({
	className = '',
	customStyle = '',
	files = [],
	mode = 'aspectFill',
	mediaType = 'camera',
	showAddBtn = true,
	multiple = false,
	maxDuration = 30,
	length = 3,
	sizeType,
	sourceType,
	maxCount = 3,
	children = '',
	onFail = () => {},
	onChange = () => {},
	onImageClick = () => {},
	customizeStyle = ''
}) => {
	const [playObj, setPlayObj] = useState<VideoInterface>({
		file: '',
    url: ''
	})

	const chooseFile = (): void => {
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
					onChange(newFiles, 'add')
				})
				.catch(onFail)
		} else {
			params.camera = 'back'
			Taro.chooseVideo(params)
				.then((res: any) => {
					setPlayObj({ url: res.thumbTempFilePath, file: res.tempFilePath })
					const newFiles = files.concat([{ url: res.thumbTempFilePath, file: res.tempFilePath }])
					onChange(newFiles, 'add')
				})
				.catch(onFail)
		}

	}

	const handleImageClick = (idx: number): void => {
		onImageClick &&
			onImageClick(idx, files[idx])
	}

	const handleRemoveImg = (idx: number, event: ITouchEvent): void => {
		event.stopPropagation()
		event.preventDefault()
		if (ENV === Taro.ENV_TYPE.WEB) {
			window.URL.revokeObjectURL(files[idx].url)
		}
		const newFiles = files.filter((_, i) => i !== idx)
		onChange(newFiles, 'remove', idx)
	}

	const rowLength = (mediaType === 'video' || length <= 0) ? 1 : length
	// 行数
	const matrix = generateMatrix(files as MatrixFile[], rowLength, showAddBtn)
	const rootCls = classNames(`${CssPrefix}-uploader-picker`, className)

	return (
		<CompContainer className={rootCls} style={customStyle} customizeStyle={customizeStyle}>
			{matrix.map((row, i) => (
				<View className={ `${CssPrefix}-uploader-picker__flex-box` } key={i + 1}>
					{row.map((item, j) =>
						item.url ? (
							<View
								className={ `${CssPrefix}-uploader-picker__flex-item` }
								key={i * length + j}
							>
								<View className={ `${CssPrefix}-uploader-picker__item` }>
									<View
										className={ `${CssPrefix}-uploader-picker__remove-btn` }
										onClick={(e) => handleRemoveImg(i * length + j, e)}
									/>
									{
										mediaType === 'camera' ?
											<Image
												className={ `${CssPrefix}-uploader-picker__preview-img` }
												mode={mode}
												src={item.url}
												onClick={() => handleImageClick(i * length + j)}
											/> :
											<Video
												id='video'
												className={ `${CssPrefix}-uploader-picker__preview-video` }
												src={playObj.file}
												poster={playObj.url}
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
										className={ `${CssPrefix}-uploader-picker__flex-item` }
										key={'empty_' + i * length + j}
									>
										{item.type === 'btn' && (
											<View
												className={ `${CssPrefix}-uploader-picker__item ${CssPrefix}-uploader-picker__choose-btn` }
												onClick={chooseFile}
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
		</CompContainer>
	)
}

export default Uploader
