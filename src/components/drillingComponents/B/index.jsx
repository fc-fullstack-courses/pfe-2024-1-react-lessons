import React from 'react';
import ComponentC from '../C';

const ComponentB = (props) => {
  const { forB, ...restOfBProps } = props;
  return (
    <article style={{ border: '2px solid green', padding: '20px' }}>
      <h2>ComponentB</h2>
      <p>{forB}</p>
      <ComponentC {...restOfBProps} />
    </article>
  );
};

const ComponentAState = {
  name: 'Test',
  forA: 'this is for A',
  forB: 'this is for B',
  forC: 'this is for C',
};

const { forA, ...restOfA } = ComponentAState;

// obj2 має містити усе окрім forA
const ComponentBProps = {
  ...restOfA,
};

const { forB, ...restOfBProps } = ComponentBProps;

const ComponentCProps = {
  ...restOfBProps,
};
export default ComponentB;
