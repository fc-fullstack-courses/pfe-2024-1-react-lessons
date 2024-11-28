import React, { Component } from 'react';

class Header extends Component {
  state = {
    user: {
      id: 0,
      firstName: 'User',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    },
  };

  handleLogout = () => {
    this.setState({
      user: null,
    });
  };

  handleLogin = () => {
    this.setState({
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

  render() {
    const { user } = this.state;

    const fullName = user ? `${user.firstName} ${user.lastName}`.trim() : 'Guest';

    const logoutBtn = <button onClick={this.handleLogout}>Вийти</button>;
    const loginBtn = <button onClick={this.handleLogin}>Увійти</button>;

    return (
      <header>
        <h1>Мій сайт</h1>
        <p>Привіт {fullName}</p>
        {user ? logoutBtn : loginBtn}
      </header>
    );
  }
}

export default Header;
