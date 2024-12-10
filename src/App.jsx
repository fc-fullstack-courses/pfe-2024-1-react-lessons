import React from 'react';
import { UserContext, ThemeContext } from './contexts';
import Header from './components/Header';
import CONSTANTS from './configs';
import MouseTracker from './components/MouseTracker';
import FormMouseTracker from './components/FormMouseTracker';
import MessagesLoader from './components/MessagesLoader';
import RecipeLoader from './components/RecipeLoader';


class App extends React.Component {
  state = {
    user: {
      id: 0,
      firstName: 'Petro',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    },
    theme: CONSTANTS.THEMES.LIGHT_THEME,
    isTrackerShown: false,
    counter: 0
  };

  handleLogout = () => {
    this.setState({
      user: null,
    });
  };

  handleLogin = () => {
    this.setState({
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

  switchTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  toggleTracker = () => {
    this.setState({
      isTrackerShown : !this.state.isTrackerShown
    })
  }

  handleClick = () => {
    // this.setState({
    //   counter: this.state.counter + 2
    // });

    // console.log(this.state.counter); // 0

    // this.setState({
    //   counter: this.state.counter + 1 // 0 + 1 
    // });

    // коллбек режим setState
    this.setState((state, props) => {
      // state та props у колбеці гарантовано з найсвіжішими даними

      console.log(state.counter); // 0

      // повертаємо з колбеку об'єкт стану який треба докинути
      return {
        counter: state.counter + 1 // 0 + 1
      }
    });

    // console.log(this.state.counter); // 0

    // this.setState({
    //   counter: this.state.counter + 1 // 0 + 1 
    // });

    this.setState((state) => {
      console.log(this.state.counter); 
      console.log(state.counter); // 1

      return {
        counter: state.counter + 1 // 1 + 1
      }
    });


    // console.log(this.state.counter); // 0
  }

  render() {
    const { user, theme, isTrackerShown, counter } = this.state;
    return (
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={[theme, this.switchTheme]}>
          <RecipeLoader />
          <MessagesLoader />
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
