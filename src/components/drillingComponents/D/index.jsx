import React from 'react';

const ComponentD = (props) => {
  const { name } = props;
  return (
    <article
      style={{
        border: '2px dotted blue',
        padding: '20px',
        background: 'lightgray',
      }}
    >
      <h2>ComponentD</h2>
      <p>Name is: {name}</p>
    </article>
  );
};

export default ComponentD;
