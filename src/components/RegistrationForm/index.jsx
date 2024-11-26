import React from 'react';

function registerUser(userData) {
  alert('user regisetered!');
}

class RegistrationForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    // вивести email в консоль
    console.log(e.target.elements.email.value);

    const newUserData = {
      // email: e.target.elements.email.value,
      // дістаємо значення з единого джерела істини
      email: this.state.email,
      password: e.target.elements.password.value,
      nickname: e.target.elements.nickname.value,
    };

    // тут робимо запит на сервер
    registerUser(newUserData);

    // скинути форму
    e.target.reset();
  };

  handleEmailChange = (e) => {
    console.log(e.target.value);

    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          value={email}
          onChange={this.handleEmailChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter password'
          value={password}
          onChange={this.handlePasswordChange}
        />
        <input type='text' name='nickname' placeholder='Enter nickname' />
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
