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
    
    const fullName = `${userFirstName} ${userLastName}`.trim();
  
    return React.createElement(
      'p',
      { className: 'greetingText' },
      `Hello, ${fullName ? fullName : 'Guest' }.`
    );
  }
}

export default Greeting;
