import React from 'react';
import ComponentD from '../D';

const ComponentC = (props) => {
  const { forC, ...restOfCProps } = props;
  return (
    <article style={{ border: '2px dotted blue', padding: '20px' }}>
      <h2>ComponentC</h2>
      <p>{forC}</p>
      <ComponentD {...restOfCProps}/>
    </article>
  );
};

export default ComponentC;
