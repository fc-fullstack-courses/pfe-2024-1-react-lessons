import { useReducer } from 'react';

/*
  Зробити компонент Counter (лічільник) який буде відображати певне число і кнопку
  при натисканні на кнопку число має збільшукватися
  реалізувати логіку компонента через хук useReducer

  базовий рівень:
    при натисканні на кнопку лічильник збільшуєься на 1

  просунутий рівень:
    у стані окрім лічильника зберігати крок зміни. При натисканні на кнопку
    змінювати значення на значення кроку
    
  максимальний рівень:
    реалізувати логіку зміни кроку у компоненті. Візуально це може бути
    інпутом або селектом. Не забути прописати відповідні зміни у редюсері
*/

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + state.step };
    }
    case 'setStep': {
      return { ...state, step: action.step };
    }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  step: 1,
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'increment' });
  };

  const handleStepChange = (e) => {
    dispatch({ type: 'setStep', step: Number(e.target.value) });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count is: {state.count}</p>
      <button onClick={handleClick}>Click me</button>
      <select onChange={handleStepChange} value={state.step}>
        <option value='1'>1</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
      </select>
    </div>
  );
}

export default Counter;
