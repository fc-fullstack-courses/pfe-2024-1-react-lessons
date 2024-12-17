import styles from './Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      Home Page.
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <span>Заголовок 1</span>
          <ul className={styles.subNavList}>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
          </ul>
        </li>
        <li className={styles.navListItem}>
          <span>Заголовок 2</span>
          <ul className={styles.subNavList}>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
            <li className={styles.subNavListItem}>Посилання 1</li>
          </ul>
        </li>
      </ul>
      {/* <Footer /> */}
    </div>
  );
}
