import React, { Component } from 'react';
import { ThemeContext } from '../../contexts';

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
        {(theme) => {

          return <header>
            <h1>Мій сайт</h1>
            <p>Привіт {fullName}</p>
            {user ? logoutBtn : loginBtn}
            <button>Змінити тему на {theme === 'dark' ? 'світлу' : 'темну'}</button>
          </header>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
