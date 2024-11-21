import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';

/*
  Компоненти бувають вдох видів:
    - класові
    - функціональні
*/

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

function MyFunctionalComponent() {
  const heading = React.createElement(
    'h2',
    { className: 'articleHeading' },
    'Function Component heading'
  );

  const textPar = React.createElement('p', null, '12345');

  const article = React.createElement('article', null, heading, textPar);

  return article;
}

// Щоб намальовати компонент його закидемо у createElement першим аргументом
const classElem1 = React.createElement(MyClassComponent);
const classElem2 = React.createElement(MyClassComponent);

const funcElem1 = React.createElement(MyFunctionalComponent);
const funcElem2 = React.createElement(MyFunctionalComponent);

// const app = React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);

// Фрагмент - спеціальний компонент який дозволяє створювати обгорту для елементів 
// яку реакт потім не буде малювати в верстці. пропси (2 аргумент) завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2 )

function App () {
  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  const funcElem1 = React.createElement(MyFunctionalComponent);
  const funcElem2 = React.createElement(MyFunctionalComponent);

  // return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);
  return React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2);
}

const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app);
