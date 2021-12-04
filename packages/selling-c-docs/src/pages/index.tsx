import { history } from 'umi';
import { Button } from 'antd';
import { IMG_PREFIX } from '@/business/constants'
import { logoUrl } from '@/business/layout'
import './index.less';

const list = [{
  title: '相关产品',
  children: [{
    title: 'Taro',
    clickCallback: () => {}
  }, {
    title: 'React',
    clickCallback: () => {}
  }, {
    title: 'Relay',
    clickCallback: () => {}
  }]
}]

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
      <div className="index-page__footer">
        <div className="container container-footer">
          <div className="index-page__footer-list">
            <img
              className="index-page__footer-list__logo"
              src={logoUrl}
            />
          </div>
          {
            list.map((v, i) => (
              <div className="index-page__footer-list" key={ i }>
                <div className="index-page__footer-header">{v.title}</div>
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
    </div>
  );
}
