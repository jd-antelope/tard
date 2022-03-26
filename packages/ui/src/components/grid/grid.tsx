import React, { FC, cloneElement, ReactElement, ComponentProps } from 'react'
import classNames from 'classnames'
import GridItem from './grid-item'
import { GridProps } from './type'
import { objectToString } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import { cssPrefix } from '../../common'

const Grid: FC<GridProps> = (props) => {
  const { 
    columnNum = 4, 
    border = false,  
    iconSize = 60, 
    clickable = false, 
    direction = 'bottom', 
    customizeStyle = ''
  } = props
  const CssPrefix = cssPrefix()
  const ImageText = classNames(`${CssPrefix}-grid`)
  // 定义宫格组件数据
  const items: ReactElement<ComponentProps<typeof GridItem>>[] = []
  const itemList = React.Children.map(props.children, (child, index) => {
    // 组件内是否有内置插槽
    if (React.isValidElement(child)) {
      // 重置子组件属性
      const childProps = {
        ...child.props,
        columnNum,
        border,
        iconSize,
        direction,
        index: index + 1,
        length: (props.children as any).length,
        onClick: () => {
          !clickable && child.props.onClick()
        },
      }
      items.push(child)
      // 将变量引入，克隆并返回一个新的组件
      return cloneElement(child, childProps)
    } else {
      return child
    }
  })
  // 宫格组件样式变量
  const style = (objectToString({
    'grid-template-columns': new Array(columnNum).fill('auto ').reduce((s, v) => s + v, ''),
  }))
  
  return (
    <CompContainer className={ImageText} style={style} customizeStyle={customizeStyle}>
      {/* 将组件进行解析 */}
      {itemList}
    </CompContainer>
    
  )
}

export default Grid
