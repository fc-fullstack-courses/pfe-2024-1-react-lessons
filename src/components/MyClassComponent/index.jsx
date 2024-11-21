import React from 'react';

// Класовий компонент
class MyClassComponent extends React.Component {
  render() {
    // має повертати якусь річ яку реакт буде відмальовувати на його місці
    /*
      реакт малює:
        цифри
        непусті рядкі
        реакт-елементи
        інші реакт компоненти
        в залежності від вмісту може відмальовувати масиви
      реакт НЕ відображає:
        булеві значення
        null
        undeifined
        Symbol
      реакт буде кидати помилку якщо змусити його відмалювати звичайний об'єкт
    */
    const heading = React.createElement(
      'h2',
      { className: 'articleHeading' },
      'Class Component heading'
    );

    const textPar = React.createElement('p', null, 'Lorem Ipsum');

    const article = React.createElement('article', null, heading, textPar);

    return article;
  }
}

// class MyClassComponent extends Component {}

export default MyClassComponent;
