import React from 'react';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionComponent';
import Greeting from './components/Greeting';
import Product from './components/Product';

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

const product1 = {
  id: 0,
  name: 'Product 1',
  price: 1235.99,
  description: 'Lorem Ipsum bla bla bla',
};

const product2 = {
  id: 1,
  name: 'Product 2',
  price: 99.99,
  description: 'Lorem Ipsum bla bla bla 12324',
};

function App() {
  const shouldClassComponentsRender = Math.random() > 0.5;

  // if (shouldClassComponentsRender) {
  //   return <>
  //     <Greeting userFirstName='John' userLastName='Doe' />
  //     <Greeting userFirstName='Sarah'/>
  //     <Greeting/>
  //     <MyClassComponent />
  //     <MyClassComponent />
  //   </>;
  // } else {
  //   return <>
  //   <Greeting userFirstName='John' userLastName='Doe' />
  //   <Greeting userFirstName='Sarah'/>
  //   <Greeting/>
  //   <MyFunctionalComponent />
  //   <MyFunctionalComponent />
  // </>;
  // }

  return (
    <>
      {/* <Greeting userFirstName='John' userLastName='Doe' />
      <Greeting userFirstName='Sarah' />
      <Greeting /> */}
      <Product product={product1} />
      <Product product={product2} />
      {/* {shouldClassComponentsRender ? (
        <MyClassComponent />
      ) : (
        <MyFunctionalComponent />
      )}
      {shouldClassComponentsRender ? (
        <MyClassComponent />
      ) : (
        <MyFunctionalComponent />
      )} */}
    </>
  );
}

export default App;
