import { useReducer } from 'react';
import { UserContext, ThemeContext } from './contexts';
import Avatar from './components/Avatar';
import Header from './components/Header';
import MouseTracker from './components/MouseTracker';
import { initialState, reducer } from './reducer';

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTracker = () => {
    dispatch({ type: 'toggleTracker' });
  };

  const changeEmail = ({ target: { value } }) => {
    const action = {
      type: 'changeEmail',
      email: value,
    };

    dispatch(action);
  };

  const changeComment = ({ target: { value } }) => {
    const action = {
      type: 'changeComment',
      comment: value,
    };

    dispatch(action);
  };

  const submitForm = (e) => {
    e.preventDefault();

    alert(`ми з вами зв'яжемося.`);
  };

  return (
    <UserContext.Provider value={state.user}>
      <ThemeContext.Provider value={[state.theme, dispatch]}>
        <Header dispatch={dispatch} />
        <Avatar src='test' alt='test' />
        <button onClick={toggleTracker}>toggle tracker</button>
        {state.isTrackerShown && <MouseTracker />}
        <form onSubmit={submitForm}>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={changeEmail}
          />
          <textarea
            name='comment'
            value={state.comment}
            onChange={changeComment}
          />
          <button>Send comment</button>
        </form>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
