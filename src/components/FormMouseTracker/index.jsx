import React, { useState, useEffect } from 'react';

// ERROR
// useState();

// function sum () {
//   // error
//   useState();
// }

function FormMouseTracker(props) {

  const [inputText, setInputText] = useState('dont kill me');

  // if(true) {
  //   // ERROR
  //   useEffect(() => {
  //     console.log('не найвищій рівень')
  //   })
  // }

  useEffect(() => {
    if(true) {
      console.log('не найвищій рівень')
    }
  })

  const [{ x, y }, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(function effect() {
    console.log('effect callback');
    document.addEventListener('mousemove', handleChangeCoords);

    return function effectCleanup() {
      console.log('effectCleanup callback');
      document.removeEventListener('mousemove', handleChangeCoords);
    };
  }, []);

  useEffect(() => {
    document.title = `Input value: ${inputText}`;
    console.log('input title change');
  }, [inputText]);

  useEffect(() => {
    console.log(`X is: ${x}`);
    console.log(`Y is: ${y}`);
  }, [x, y]);

  const handleInputChange = ({ target: { value } }) => {
    setInputText(value);

    // setInputText((inputTextValue) => {
    //   console.log(inputTextValue);

    //   return value;
    // });
  };

  function handleChangeCoords({ clientX, clientY }) {
    setMouseCoordinates({
      x: clientX,
      y: clientY,
    });
  }

  return (
    <div
      style={{
        minHeight: '500px',
        maxWidth: '500px',
        border: '1px solid black',
      }}
    >
      <p>Input value is: {inputText}</p>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
      <input type='text' value={inputText} onChange={handleInputChange} />
    </div>
  );
}

export default FormMouseTracker;
