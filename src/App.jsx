import React, { useState } from 'react';
import Greeting from './components/Greeting';
import ProductDashboard from './components/ProductDashboard';
import Clock from './components/Clock';
import RegistrationForm from './components/RegistrationForm';

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

function App() {
  const [isClockRendered, setIsClockRendered] = useState(false);

  return (
    <>
      <button onClick={() => setIsClockRendered(!isClockRendered)}>Toggle Clock</button>
      {isClockRendered && <Clock />}
      <RegistrationForm />
      <Greeting />
      <ProductDashboard />
    </>
  );
}

export default App;
