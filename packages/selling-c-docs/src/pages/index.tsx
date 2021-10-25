import { history } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={ styles.indexpage }>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <div className={ styles.header }>
        <h2>selling UI</h2>
        <h3>一套基于商羚C端的 Taro 框架开发的多端 UI 组件库</h3>
        <div className={ styles.buttons }>
          <Button 
            className={styles.button} 
            onClick={ () => history.push('/docs') } 
            type="primary"
          >起步</Button>
          <Button 
            className={styles.button} 
            onClick={ () => window.location.href = 'https://coding.jd.com/selling-front/shop-c-components/' } 
            danger
          >coding</Button>
        </div>
      </div>
    </div>
  );
}
