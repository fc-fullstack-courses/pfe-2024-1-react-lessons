import React from 'react';
import { ThemeContext, UserContext } from '../contexts';

/*
  Компонент вищого порядку (High Order Component) КВП/HOC

  це функція яка приймає якийсь Компонент1 і повертає інший компонент (Компонент2)
  пр чому Компонент2 зазвичай додає якогось функціоналу або даних Компоненту1
*/
export function withTheme(Component) {
  class ComponentWithTheme extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {([theme, switchTheme]) => (
            <Component
              theme={theme}
              switchTheme={switchTheme}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  return ComponentWithTheme;
}

export function withUser(Component) {
  return function ComponentWithUser(props) {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
}