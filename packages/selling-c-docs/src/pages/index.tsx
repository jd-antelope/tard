import { history } from 'umi';
import { Button } from 'antd';
import { IMG_PREFIX } from '@/business/constants'
import './index.less';

export default function IndexPage() {
  return (
    <div className="index-page">
      <div className="container index-page__banner">
        <div className="index-page__banner-content">
          <div className="index-page__banner-content__login">
            <img src={ `${IMG_PREFIX}/login-big.png` } />
          </div>
          <p className="index-page__banner-content__p">一套基于Taro框架开发的多端React UI组件库</p>
          <div className="index-page__banner-content__buttons">
            <Button 
              className="index-page__banner-content__button" 
              onClick={ () => history.push('/docs') } 
              type="primary"
            >起步</Button>
            <Button
              className="index-page__banner-content__button"
              onClick={ () => window.location.href = 'https://coding.jd.com/selling-front/shop-c-components/' } 
              type="primary"
              ghost
            >扫码体验</Button>
          </div>
        </div>
      </div>
      <div className="container index-page__features">组件特色</div>
      <div className="container index-page__footer">
        <div className=""></div>
      </div>
    </div>
  );
}
