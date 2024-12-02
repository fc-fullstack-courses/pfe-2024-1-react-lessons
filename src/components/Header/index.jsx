import React, { Component } from 'react';
import { ThemeContext } from '../../contexts';
import styles from './Header.module.css';
import CONSTANTS from '../../configs';

class Header extends Component {
  render() {
    const { user, handleLogout, handleLogin } = this.props;

    const fullName = user
      ? `${user.firstName} ${user.lastName}`.trim()
      : 'Guest';

    const logoutBtn = <button onClick={handleLogout}>Вийти</button>;
    const loginBtn = <button onClick={handleLogin}>Увійти</button>;

    return (
      <ThemeContext.Consumer>
        {([theme, switchTheme]) => {
          let currentThemeClass;

          if (theme === CONSTANTS.THEMES.DARK_THEME) {
            currentThemeClass = styles.darkTheme;
          } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
            currentThemeClass = styles.lightTheme;
          }

          const className = `${styles.container} ${currentThemeClass}`;

          return (
            <header className={className}>
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
