import React, { Component } from 'react';
import { OurContext } from '../../../contexts';
import ComponentB from '../B';

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
