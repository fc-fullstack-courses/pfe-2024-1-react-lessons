import { useContext } from 'react';
import cx from 'classnames';
import { ThemeContext, UserContext } from '../../contexts';
import styles from './Header.module.scss';
import CONSTANTS from '../../configs';

function Header({ dispatch }) {
  const handleLogout = () => {
    dispatch({ type: 'logoutUser' });
  };

  const handleLogin = () => {
    dispatch({
      type: 'loginUser',
      user: {
        id: 0,
        firstName: 'User',
        lastName: 'Userenko',
        isMale: true,
        email: 'testuser@gmail.com',
        age: 12,
      },
    });
  };

  // useContext приймає об'єкт контексту та повертає значення яке у ньому знаходиться
  const [theme, switchTheme] = useContext(ThemeContext);
  const user = useContext(UserContext);

  const fullName = user ? `${user.firstName} ${user.lastName}`.trim() : 'Guest';

  const logoutBtn = <button onClick={handleLogout}>Вийти</button>;
  const loginBtn = <button onClick={handleLogin}>Увійти</button>;

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK_THEME,
    [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGHT_THEME,
    [styles.blackTheme]: theme === CONSTANTS.THEMES.BLACK_THEME,
  });

  return (
    <header className={headerClasses}>
      <h1>Мій сайт</h1>
      <p>Привіт {fullName}</p>
      {user ? logoutBtn : loginBtn}
      <button
        onClick={() => {
          const newTheme =
            theme === CONSTANTS.THEMES.DARK_THEME
              ? CONSTANTS.THEMES.LIGHT_THEME
              : CONSTANTS.THEMES.DARK_THEME;

          dispatch({
            type: 'changeTheme',
            theme: newTheme,
          });
        }}
      >
        Змінити тему на {theme === 'dark' ? 'світлу' : 'темну'}
      </button>
    </header>
  );
}

export default Header;
