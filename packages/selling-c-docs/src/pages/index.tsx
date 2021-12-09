import { history } from 'umi';
import { Button } from 'antd';
import { IMG_PREFIX } from '@/business/constants'
import { logoUrl } from '@/business/layout'
import FooterResources from '@/business/home-footer-resources'
import './index.less';

export default function IndexPage() {
  return (
    <div className="index-page">
      <div className="index-page__banner">
        <div className="container">
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
                className="index-page__banner-content__button scan-button"
                type="primary"
                ghost
              >
                扫码体验
                <div className="scan-button__content">
                  <p className="scan-button__content-p">请用微信扫码体验</p>
                  <img className="scan-button__content-img" src={ `${IMG_PREFIX}/weapp.jpg` } />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container index-page__features">组件特色</div>
      <div className="index-page__footer">
        <div className="container container-footer">
          <div className="index-page__footer-list">
            <img
              className="index-page__footer-list__logo"
              src={logoUrl}
            />
          </div>
          {
            FooterResources.map((v, i) => (
              <div className="index-page__footer-list" key={ i }>
                <div className="index-page__footer-header">{ v.title }</div>
                {
                  v.children.map((val, idx) =>(
                    <div 
                      className="index-page__footer-item" key={ idx }
                      onClick={ val.clickCallback }
                    >{val.title}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="index-page__footer-bottom">
          <div className="container container-footer">
            源自京东零售云商羚 ｜ Copyright (c) 2021-present by jd-antelope
          </div>
        </div>
    </div>
  );
}
