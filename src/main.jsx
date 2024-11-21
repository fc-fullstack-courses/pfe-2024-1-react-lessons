import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import MyClassComponent from './components/MyClassComponent';
// import MyFunctionalComponent from './components/MyFunctionComponent';

/*
  Компоненти бувають вдох видів:
    - класові
    - функціональні
*/

// Щоб намальовати компонент його закидемо у createElement першим аргументом
// const classElem1 = React.createElement(MyClassComponent);
// const classElem2 = React.createElement(MyClassComponent);

// const funcElem1 = React.createElement(MyFunctionalComponent);
// const funcElem2 = React.createElement(MyFunctionalComponent);

// const app = React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);

// Фрагмент - спеціальний компонент який дозволяє створювати обгорту для елементів 
// яку реакт потім не буде малювати в верстці. пропси (2 аргумент) завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2 )

const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app);
