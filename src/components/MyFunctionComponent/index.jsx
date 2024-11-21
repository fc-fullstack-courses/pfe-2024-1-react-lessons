import React from 'react';

function MyFunctionalComponent() {
  const heading = React.createElement(
    'h2',
    { className: 'articleHeading' },
    'Function Component heading'
  );

  const textPar = React.createElement('p', null, '12345');

  const article = React.createElement('article', null, heading, textPar);

  return article;
}

export default MyFunctionalComponent;
