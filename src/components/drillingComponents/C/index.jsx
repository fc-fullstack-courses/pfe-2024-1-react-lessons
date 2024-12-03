import React from 'react';
import ComponentD from '../D';
import { UserContext } from '../../../contexts';

const ComponentC = (props) => {
  const { forC, ...restOfCProps } = props;

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
            <ComponentD {...restOfCProps} />
          </article>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponentC;
