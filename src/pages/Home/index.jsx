import Header from '../../components/Header';
import styles from './Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      Home Page.
      {/* <Footer /> */}
    </div>
  );
}
