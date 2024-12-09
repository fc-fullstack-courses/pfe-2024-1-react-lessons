import React, { useState, useEffect } from 'react';

const MouseTracker = (props) => {
  const [{ x, y }, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleChangeCoords = ({ clientX, clientY }) => {
    setMouseCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  /*
    хук для робогти з побічними ефектами.
    Приймає функцію першим аргументом та масив залежностей другим і повертає undefined
    функція буде містити ваші побічні ефекти
    масив залежностей дозволить керувати частотою запуску функції
  */
  useEffect(function effect() {
    /*
      коллбек effect за замовчанням запускається після кожного рендеру
      тобто є комбінацією componentDidMount + componentDidUpdate
    */
    console.log('effect callback');
    document.addEventListener('mousemove', handleChangeCoords);

    return function effectCleanup () {
      /*
        коллбек effectCleanup є аналогом componentWillUnmount, АЛЕ
        він також запускається перед кожним рендером після першого
      */
      console.log('effectCleanup callback');
      document.removeEventListener('mousemove', handleChangeCoords);
    }
  }, []);
  
  return (
    <div>
      <p>X coord value is: {x}</p>
      <p>Y coord is: {y}</p>
    </div>
  );
}

export default MouseTracker;
