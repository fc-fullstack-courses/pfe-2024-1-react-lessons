import React, { Component } from 'react';
import ComponentB from '../B';

class ComponentA extends Component {
  state = {
    name: 'Test',
    forA : 'this is for A',
    forB : 'this is for B',
    forC : 'this is for C',
  };

  render() {
    const { name, forA, forB, forC } = this.state;

    return (
      <article style={{ border: '2px solid black', padding: '20px' }}>
        <h2>ComponentA</h2>
        <p>{forA}</p>
        <ComponentB name={name} forB={forB} forC={forC}/>
      </article>
    );
  }
}

export default ComponentA;
