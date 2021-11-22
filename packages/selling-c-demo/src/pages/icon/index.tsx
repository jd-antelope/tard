import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlIcon } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';
import ICONS from './icons'

const Icon: FC = () => {
  const icons = ICONS
  const iconColor = '#999'
  const iconSize = 30

  return (
    <View className="container">
      <DocsHeader title='Icon'></DocsHeader>
      <View className='doc-body'>
        {/* 主要 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>主要</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.main.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 文件 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>文件</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.file.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 文本 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>文本</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.text.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 箭头 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>箭头</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.arrow.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 媒体控制 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>媒体控制</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.media.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 多媒体 */}
        <View className='panel'>
          <View className='doc-body-content-tip'>多媒体</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.photo.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Logo */}
        <View className='panel'>
          <View className='doc-body-content-tip'>Logo</View>
          <View className='panel__content'>
            <View className='icon-list'>
              {icons.logo.map((icon, index) => (
                <View className='icon-list__item' key={`at-icon-${index}`}>
                  <View className='icon-list__icon'>
                    <SlIcon value={icon} color={iconColor} size={iconSize}></SlIcon>
                  </View>
                  <View className='icon-list__name'>{icon}</View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Icon);