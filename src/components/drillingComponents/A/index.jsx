import React, { Component } from 'react';
import ComponentB from '../B';

/*
  Робота з контекстом:
  1. Створити контекст
  2. Покласти дані в контекст
  3. отримати дані там де вони потрібні
*/

// 1. Створити контекст
const OurContext = React.createContext();

console.log(OurContext);

class ComponentA extends Component {
  state = {
    name: 'Test',
    forA: 'this is for A',
    forB: 'this is for B',
    forC: 'this is for C',
    otherName: 'Name from context',
  };

  render() {
    const { name, forA, forB, forC, otherName } = this.state;

    return (
      // 2. Покласти дані в контекст
      <OurContext.Provider value={otherName}>
        <article style={{ border: '2px solid black', padding: '20px' }}>
          <h2>ComponentA</h2>
          <p>{forA}</p>
          <ComponentB name={name} forB={forB} forC={forC} />
        </article>
      </OurContext.Provider>
    );
  }
}

export default ComponentA;

export { OurContext };
