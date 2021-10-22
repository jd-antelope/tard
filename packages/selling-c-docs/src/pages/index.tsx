import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title} onClick={ () => history.push('/docs') }>index</h1>
    </div>
  );
}
