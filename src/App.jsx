import { useReducer } from 'react';
import { UserContext, ThemeContext } from './contexts';
import Avatar from './components/Avatar';
import Header from './components/Header';
import MouseTracker from './components/MouseTracker';
import { initialState, reducer } from './reducer';

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
