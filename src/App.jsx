import React from 'react';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionComponent';

function App() {
  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  const funcElem1 = React.createElement(MyFunctionalComponent);
  const funcElem2 = React.createElement(MyFunctionalComponent);

  // return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);
  return React.createElement(
    React.Fragment,
    null,
    classElem1,
    classElem2,
    funcElem1,
    funcElem2
  );
}

export default App;
