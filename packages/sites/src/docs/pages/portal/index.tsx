import { Button } from 'antd'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import LayoutHeader from '../../layouts/layout-header'
import { IMG_PREFIX } from '../../../constants'
import { logoUrl } from '../../../constants/layout'
import { COMPS_LIST, FOOTTER_RESOURCES } from '../../../constants/home-resources'
import './index.less'

export default function IndexPage () {
  const navigate = useNavigate()
  return (
    <LayoutHeader>
      <div className="index-page index-bg">
        <div className="index-page__banner">
          <div className="container">
            <div className="index-page__banner-content">
              <div className="index-page__banner-content__login">
                <img src={ `${IMG_PREFIX}/logo-big.png` } />
              </div>
              <p className="index-page__banner-content__p">一套基于Taro框架开发的多端React UI组件库</p>
              <div className="index-page__banner-content__buttons">
                <Button
                  className="index-page__banner-content__button"
                  onClick={ () => navigate('/introduce') }
                  type="primary"
                >起步</Button>
                <Button
                  className="index-page__banner-content__button scan-button"
                  type="primary"
                  ghost
                >
                  扫码体验
                  <div className="scan-button__content">
                    <p className="scan-button__content-p">微信扫码体验</p>
                    <img className="scan-button__content-img" src={ `${IMG_PREFIX}/taro-weapp.jpg` } />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container index-page__features comps">
          <div className="comps-header">组件特色</div>
          <div className="comps-content">
            {
              COMPS_LIST.map((v, i) => (
                <div className="comps-content-item" key={ i }>
                  <div className="comps-content-item__title">{v.title}</div>
                  <div className="comps-content-item__content">{v.content}</div>
                  <div
                    className={
                      cn('comps-content-item__des', {
                        'comps-content-item__desfrond': v.content === '',
                        'family-light': v.content !== ''
                      })
                    }
                  >{v.des}</div>
                  {
                    v.isTip && <div className="comps-content-item__tip">持续扩展中</div>
                  }
                  <img className="comps-content-item__bg" src={ v.url } />
                </div>
              ))
            }
          </div>
        </div>
        <div className="index-page__footer">
          <div className="container container-footer">
            <div className="index-page__footer-list">
              <img
                className="index-page__footer-list__logo"
                src={ logoUrl }
              />
            </div>
            {
              FOOTTER_RESOURCES.map((v, i) => (
                <div className="index-page__footer-list" key={ i }>
                  <div className="index-page__footer-header">{v.title}</div>
                  {
                    v.children.map((val, idx) => (
                      <div
                        className="index-page__footer-item" key={ idx }
                      >
                        <a href={ val.url }>{val.title}</a>
                      </div>
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
    </LayoutHeader>
  )
}
