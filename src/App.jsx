import { useState } from 'react';
import { UserContext, ThemeContext } from './contexts';
import CONSTANTS from './configs';
import Avatar from './components/Avatar';
import Header from './components/Header';
import MouseTracker from './components/MouseTracker';

function App() {
  const [user, setUser] = useState({
    id: 0,
    firstName: 'Petro',
    lastName: 'Userenko',
    isMale: true,
    email: 'testuser@gmail.com',
    age: 12,
  });
  const [theme, setTheme] = useState(CONSTANTS.THEMES.LIGHT_THEME);
  const [isTrackerShown, setIsTrackerShown] = useState(false);
  const [email, setEmail] = useState('test');
  const [comment, setComment] = useState('');

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin = () => {
    setUser({
      id: 0,
      firstName: 'User',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    });
  };

  const toggleTracker = () => {
    setIsTrackerShown(!isTrackerShown);
  };

  const changeEmail = ({target: {value}}) => {
    setEmail(value);
  }

  const changeComment = ({target: {value}}) => {
    setComment(value);
  }

  const submitForm =  (e) => {
    e.preventDefault();

    alert(`ми з вами зв'яжемося.`);
  }

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header handleLogin={handleLogin} handleLogout={handleLogout} />
        <Avatar src='test' alt='test' />
        <form onSubmit={submitForm}>
          <input type='email' name='email' value={email} onChange={changeEmail} />
          <textarea name='comment' value={comment} onChange={changeComment} />
          <button>Send comment</button>
        </form>
        <button onClick={toggleTracker}>toggle tracker</button>
        {isTrackerShown && <MouseTracker />}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
