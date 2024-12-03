import React from 'react';
import ComponentD from '../D';
import { UserContext, ThemeContext } from '../../../contexts';

const ComponentC = (props) => {
  const { forC, ...restOfCProps } = props;

  const renderWithThemeContext = (theme) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <article style={{ border: '2px dotted blue', padding: '20px' }}>
              <h2>ComponentC</h2>
              <p>{forC}</p>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>Поточна тема: {theme}</p>
              <ComponentD {...restOfCProps} />
            </article>
          );
        }}
      </UserContext.Consumer>
    );
  };

  return (
    <ThemeContext.Consumer>{renderWithThemeContext}</ThemeContext.Consumer>
  );
};

export default ComponentC;
