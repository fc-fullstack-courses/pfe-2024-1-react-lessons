import { useReducer } from 'react';
import { UserContext, ThemeContext } from './contexts';
import CONSTANTS from './configs';
import Avatar from './components/Avatar';
import Header from './components/Header';
import MouseTracker from './components/MouseTracker';

/*
    редюсер приймає поточне значення стану та action який йому надіслав dispatch
    та має на їх основі повернути нове значення стану. Запускається реактом коли хтось запускає
    dispatch
 */
function reducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'changeEmail': {
      const newState = {
        ...state,
        email: action.email,
      };

      return newState;
    }
    case 'changeComment': {
      const newState = {
        ...state,
        comment: action.comment,
      };

      return newState;
    }
    case 'changeTheme': {
      const newState = {
        ...state,
        theme: action.theme,
      };

      return newState;
    }
    case 'loginUser': {
      const newState = {
        ...state,
        user: action.user,
      };

      return newState;
    }
    case 'logoutUser': {
      const newState = {
        ...state,
        user: null,
      };

      return newState;
    }
    case 'toggleTracker' : {
      return {
        ...state,
        isTrackerShown: !state.isTrackerShown
      }
    }
  }

  return state;
}

const initialState = {
  email: '',
  comment: '',
  user: {
    id: 0,
    firstName: 'Petro',
    lastName: 'Userenko',
    isMale: true,
    email: 'testuser@gmail.com',
    age: 12,
  },
  theme: CONSTANTS.THEMES.LIGHT_THEME,
  isTrackerShown: false
};

function App() {
  /*
    useReducer - хук для роботи зі станом замість useState
      приймає:
        1. reducer - функція яка має повернути нове значення стану
        2. initialState - початкове значення стану
      повертає кортеж з 2 значень
        1. поточне значання стану
        2. функція dispatch яка дозвоить змінити стан
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [isTrackerShown, setIsTrackerShown] = useState(false);

  const handleLogout = () => {
    dispatch({ type: 'logoutUser' });
  };

  const handleLogin = () => {
    dispatch({
      type: 'loginUser',
      user: {
        id: 0,
        firstName: 'User',
        lastName: 'Userenko',
        isMale: true,
        email: 'testuser@gmail.com',
        age: 12,
      },
    });
  };

  const changeTheme = (newTheme) => {
    dispatch({
      type: 'changeTheme',
      theme: newTheme,
    });
  };

  const toggleTracker = () => {
    dispatch({ type: 'toggleTracker' });
  };

  const changeEmail = ({ target: { value } }) => {
    /*
      Принципп роботи dispatch
        При виклику dispatch ви йому маєте передати один аргумент (action)
        у цьому аргументі має бути достатньо деталей щоб зрозуміти як треба змінити стан

        після запуску dispatch реакт запускає функцію reducer
    */

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
      <ThemeContext.Provider value={[state.theme, changeTheme]}>
        <Header handleLogin={handleLogin} handleLogout={handleLogout} />
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
