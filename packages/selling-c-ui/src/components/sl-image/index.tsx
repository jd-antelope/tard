import React, { memo, useEffect, useState, Fragment } from 'react';
import { FC, useDidShow } from '@tarojs/taro';
import cn from 'classnames';
import { Image } from '@tarojs/components';
import { BUYIMG } from '../../common/constants';
import { SlImageProps } from '../../../types/image'
import './index.less';

const SlImage: FC<SlImageProps> = ({
  className, src, lazyLoad = false, isShowMove = false, 
  isErrorReport = false, ...res
}) => {
  const [url, setUrl] = useState<string>('');
  const [first, setFirst] = useState<boolean>(true);
  const noImg = `${BUYIMG}/common/no-img.png?1`;
  useDidShow(() => {
    setUrl(src || noImg);
  });

  useEffect(() => {
    setUrl(src || noImg);
  }, [src, noImg]);

  useEffect(() => {
    let timer: any;
    if (first && url.includes(noImg)) {
      timer = setTimeout(() => {
        setFirst(false);
        setUrl(src || noImg);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
      timer = null;
    };
  }, [src, first, url, noImg]);

  return (
    <Fragment>
      {
        process.env.TARO_ENV === 'h5' ?
          <Image
            { ... res }
            src={ url }
            className={ cn(className, {
              'hs-image-default': !url.includes(noImg) && !isShowMove,
              'hs-image-none': url.includes(noImg) && !isShowMove
            }) }
          /> :
          <Image
            { ... res }
            lazyLoad={ lazyLoad }
            src={ url }
            className={ cn(className, {
              'hs-image-default': !url.includes(noImg),
              'hs-image-none': url.includes(noImg)
            }) }

          />
      }
    </Fragment>

  );
};

export default memo(SlImage);
