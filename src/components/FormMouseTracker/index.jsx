import React, { useState } from 'react';

function FormMouseTracker(props) {
  const [inputText, setInputText] = useState('dont kill me');

  const [{ x, y }, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleInputChange = ({ target: { value } }) => {
    setInputText(value);
  };

  const handleChangeCoords = ({ clientX, clientY }) => {
    setMouseCoordinates({
      x: clientX,
      y: clientY,
    });
  };

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
