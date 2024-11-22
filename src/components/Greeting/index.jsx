import React from 'react';
// імпорт стилів у vite
import './Greeting.css';

// function Greeting(props) {
//   // props - об'єкт, який містить зовнішні налаштування для компонента

//   console.log(props);

//   const { userFirstName = '', userLastName = '' } = props;

//   const fullName = `${userFirstName} ${userLastName}`.trim();

//   return React.createElement(
//     'p',
//     { className: 'greetingText' },
//     `Hello, ${fullName ? fullName : 'Guest' }.`
//   );
// }

class Greeting extends React.Component {
  render() {
    console.log(this.props);

    const { userFirstName = '', userLastName = '' } = this.props;

    // Ніколи не змінюйте в компоненті пропси які він приймає
    // this.props.userFirstName = "Baddie";

    // Умовний рендерінг - рендерінг певних елементів / компонентів за
    // певною умовою

    const fullName = `${userFirstName} ${userLastName}`.trim();

    return fullName ? (
      <h1 className='greetingText'>Hello {fullName}.</h1>
    ) : (
      <p className='guestGreeting'>Hello Guest.</p>
    );

    // // if (fullName) {
    // //   return React.createElement(
    // //     'p',
    // //     { className: 'greetingText' },
    // //     `Hello, ${fullName}.`
    // //   );
    // // } else {
    // //   return React.createElement(
    // //     'p',
    // //     { className: 'greetingText' },
    // //     `Hello, 'Guest.`
    // //   );
    // // }

    // // if (fullName) {
    // //   return React.createElement(
    // //     'h1',
    // //     { className: 'greetingText' },
    // //     `Hello, ${fullName}.`
    // //   );
    // // } else {
    // //   return React.createElement(
    // //     'p',
    // //     { className: 'guestGreeting' },
    // //     `Hello, Guest.`
    // //   );
    // // }

    // let h1;
    // if (fullName) {
    //   h1 = React.createElement(
    //     'h1',
    //     { className: 'greetingText' },
    //     `Hello, ${fullName}.`
    //   );
    // } else {
    //   h1 = React.createElement(
    //     'p',
    //     { className: 'guestGreeting' },
    //     `Hello, Guest.`
    //   );
    // }

    // return h1;

    // // return React.createElement(
    // //   'p',
    // //   { className: 'greetingText' },
    // //   `Hello, ${fullName ? fullName : 'Guest' }.`
    // // );
  }
}

export default Greeting;
