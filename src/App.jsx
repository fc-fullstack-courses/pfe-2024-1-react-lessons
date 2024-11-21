import React from 'react';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionComponent';
import Greeting from './components/Greeting';

function App() {
  const shouldClassComponentsRender = Math.random() > 0.5;

  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  const funcElem1 = React.createElement(MyFunctionalComponent);
  const funcElem2 = React.createElement(MyFunctionalComponent);

  // return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2);
  
  if(shouldClassComponentsRender) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Greeting, { userFirstName: 'John', userLastName: "Doe"}),
      React.createElement(Greeting, { userFirstName: 'Sarah'}),
      React.createElement(Greeting, ),
      classElem1,
      classElem2,
    );
  } else {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Greeting, { userFirstName: 'John', userLastName: "Doe"}),
      React.createElement(Greeting, { userFirstName: 'Sarah'}),
      React.createElement(Greeting, ),
      funcElem1,
      funcElem2
    );
  }
 
}

export default App;
