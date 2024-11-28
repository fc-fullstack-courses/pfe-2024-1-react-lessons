import React, { useState } from 'react';
import Greeting from './components/Greeting';
import ProductDashboard from './components/ProductDashboard';
import Clock from './components/Clock';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import List from './components/List';

// звичайний елемент у реакті
const elem1 = React.createElement(
  'div',
  { id: 'div', title: 'div', className: 'div' },
  React.createElement(
    'h3',
    { className: 'heading', disabled: true },
    'Div title'
  ),
  React.createElement('p', { className: 'text' }, 'Div text')
);

// JSX версія елементу зверху
const elem2 = (
  <div id='div' title='div' className='div'>
    <h3 className='heading'>Div title</h3>
    <p className='text'>Div text</p>
  </div>
);

// const elem = <p>text</p>;
// const component2 = <MyFunctionalComponent></MyFunctionalComponent>;

// const input = <input />;
// const component = <MyClassComponent />;

// const arr = [];

// const prop1 = (
//   <MyClassComponent id='someId' someNumber={5} array={[]} array2={arr}  />
// );

// const btn1 = React.createElement('button', { disabled: true }, 'click');
// const btn2 = <button disabled>click</button>

// const name = "Test";

// const message = <p>Hello {name}</p>;

// jsx fragment
// const frag = <></>;

class App extends React.Component {
  state = {
    user: {
      id: 0,
      firstName: 'Petro',
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

    return (
      <>
        <Header
          user={user}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <UserProfile user={user} />
        <List listTitle="Покупки в магазині" listType="ordered">
          <li>Пиріг</li>
          <li>Морозиво</li>
          <li>Цукерки</li>
        </List>
        <List listTitle="Чорна П'ятниця 2024" listType="unordered">
          <li>Телефон</li>
          <li>Ноутбук</li>
          <li><b>Повербанк</b></li>
          <li>Ще одни повербанк</li>
          {/* <Header /> */}
        </List>
      </>
    );
  }
}

export default App;
