
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text, Image} from '@tarojs/components'
// import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { SlImageTextItemProps, SlImageTextItemState } from '../../../types/image-text-item'

export default class SlImageTextItem extends React.Component<SlImageTextItemProps, SlImageTextItemState> {
    public static defaultProps: SlImageTextItemProps
    public static propTypes: InferProps<SlImageTextItemProps>

    public constructor(props: SlImageTextItemProps) {
        super(props)
        this.state = {
         id:''
        }
    }

 
  

    // private handleInput = (e: CommonEvent | ITouchEvent): void => {  // input 事件
    //     this.setState({
    //         inputVal: e.detail.value
    //     })
    // }

    public render(): JSX.Element {

        const {
            data,
        } = this.props

        return (

          <View className="ImageText">
              {
                data.map((item)=>{
                  return  <View key={item.id} className="ImageTextItem">
                       <Image
                       src={item.image}
                        />
                      <Text>{item.text}</Text>
                  </View>
                })
              }
            
          </View>
        )
    }
}

SlImageTextItem.defaultProps = {
    data:[
        {
            image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
            text:"实验",
            id:123321
        },
        {
            image:"123",
            text:"实验asd",
            id:12334521
        },
        {
            image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
            text:"实验",
            id:123321
        },
        {
            image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
            text:"收藏与浏览",
            id:123321
        },
        {
            image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
            text:"收藏与浏览",
            id:123321
        },
        {
            image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F14%2F20181014131241_NMVyG.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638075977&t=271fe75719388cbc5141644d43218213",
            text:"收藏与浏览",
            id:123321
        },
    ]

}

SlImageTextItem.propTypes = {
    data: PropTypes.array,
    

}
