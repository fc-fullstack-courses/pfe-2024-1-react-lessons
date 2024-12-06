import React, { Component } from 'react';
import cx from 'classnames';
import { withTheme } from '../../hocs';
import styles from './Header.module.scss';
import CONSTANTS from '../../configs';

class Header extends Component {
  render() {
    const { user, handleLogout, handleLogin, theme, switchTheme } = this.props;

    const fullName = user
      ? `${user.firstName} ${user.lastName}`.trim()
      : 'Guest';

    const logoutBtn = <button onClick={handleLogout}>Вийти</button>;
    const loginBtn = <button onClick={handleLogin}>Увійти</button>;

    // let currentThemeClass;

    // if (theme === CONSTANTS.THEMES.DARK_THEME) {
    //   currentThemeClass = styles.darkTheme;
    // } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
    //   currentThemeClass = styles.lightTheme;
    // }

    // const className = `${styles.container} ${currentThemeClass}`;

    /*
      функція приймає необмежену кількість аргументів
        якщо ваш аргумент є рядком то він автоматично додається до результуючого рядка
        якщо ваш аргумент є об'єктом то ключем вашого об'єкта має бути клас 
          який додається до результату, а значенням - булевий вираз
          Якщо вираз дійсний - то клас додасться, якщо ні то ні
    */
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
            switchTheme(newTheme);
          }}
        >
          Змінити тему на {theme === 'dark' ? 'світлу' : 'темну'}
        </button>
      </header>
    );
  }
}

// const HeaderWithTheme = withTheme(Header);

// export default HeaderWithTheme;

export default withTheme(Header);
