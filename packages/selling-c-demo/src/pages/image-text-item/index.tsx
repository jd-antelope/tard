import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImageTextItem } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const ImageTextItem: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='ImageTextItem'></DocsHeader>
      <View className='doc-body'>
      <SlImageTextItem propsData={
          [
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 123321
            },
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 1253321
            },
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 1234321
            },
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 1233321
            },
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 1223321
            },
            {
              image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
              text: "实验",
              id: 1231321
            },
        ]
        }
         isUp={true} onClick={(data)=>{ console.log(data,"父组件内容 ")}}/>
      </View>
    </View>
  );
};

export default memo(ImageTextItem);