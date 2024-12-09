import React, { useState } from 'react';

function FormMouseTracker(props) {

  // комібнований стан у хуку useState має прроблеми
  const [state, setState] = useState({
    inputText: 'dont kill me',
    mouseCoordinates: {
      x: 0,
      y: 0,
    },
  });

  const handleInputChange = ({ target: { value } }) => {
    // якщо забти деструктуризацію то усе окрім inputText видалиться зі стану
    setState({
      ...state,
      inputText: value,
    });
  };

  const handleChangeCoords = ({ clientX, clientY }) => {
    // якщо забти деструктуризацію то усе окрім mouseCoordinates видалиться зі стану
    setState({
      ...state,
      mouseCoordinates: {
        x: clientX,
        y: clientY,
      },
    });
  };

  console.log(state);

  const {
    inputText,
    mouseCoordinates: { x, y },
  } = state;

  return (
    <div
      style={{
        minHeight: '500px',
        maxWidth: '500px',
        border: '1px solid black',
      }}
      onMouseMove={handleChangeCoords}
    >
      <p>Input value is: {inputText}</p>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
      <input type='text' value={inputText} onChange={handleInputChange} />
    </div>
  );
}

export default FormMouseTracker;
