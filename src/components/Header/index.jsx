import { useContext, useEffect, useRef } from 'react';
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

  const inputRef = useRef(null);
  const numberRef = useRef(0);

  useEffect(() => {
    console.log('inputRef');
    console.log(inputRef);
    console.log(inputRef.current); // значення рефа
  }, [inputRef]);

  useEffect(() => {
    numberRef.current = 10; // мутація рефа - вважається побічним ефектом. не призводить до повторонго рендера
    // можна робити якщо вам треба
    // this.state.number = 5; // мутація стану - Помилка
  });

  console.log(numberRef.current);

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
      {/* прив'язка рефа до елемента */}
      <input ref={inputRef} />
    </header>
  );
}

export default Header;
