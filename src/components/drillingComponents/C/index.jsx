import React from 'react';
import ComponentD from '../D';
import { UserContext, ThemeContext } from '../../../contexts';
import styles from './C.module.css';
import CONSTANTS from '../../../configs';

const ComponentC = (props) => {
  const { forC, theme, user, ...restOfCProps } = props;
  console.log(`user is ${user}`);

  let currentThemeClass;

  if (theme === CONSTANTS.THEMES.DARK_THEME) {
    currentThemeClass = styles.darkTheme;
  } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
    currentThemeClass = styles.lightTheme;
  }

  const className = `${styles.container} ${currentThemeClass}`;

  return (
    <article className={className}>
      <h2>ComponentC</h2>
      <p>{forC}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>Поточна тема: {theme}</p>
      <ComponentD {...restOfCProps} />
    </article>
  );
};

// function ComponentCWithTheme(props) {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, switchTheme]) => (
//         <ComponentC theme={theme} switchTheme={switchTheme} />
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// class ComponentCWithThemeAndUser extends React.Component {
//   render() {
//     return (
//       <UserContext.Consumer>
//         {(user) => <ComponentCWithTheme user={user} />}
//       </UserContext.Consumer>
//     );
//   }
// }

/*
  Компонент вищого порядку (High Order Component) КВП/HOC

  це функція яка приймає якийсь Компонент1 і повертає інший компонент (Компонент2)
  пр чому Компонент2 зазвичай додає якогось функціоналу або даних Компоненту1
*/
function withTheme(Component) {
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

function withUser(Component) {
  return function ComponentWithUser(props) {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
}

// Використання КВП
const ComponentCWithTheme = withTheme(ComponentC);
const ComponentCWithThemeAndUser = withUser(ComponentCWithTheme);

export default ComponentCWithThemeAndUser;
