import React from 'react';

const List = (props) => {
  const { listTitle, listType = 'ordered', children } = props;

  console.log(props);

  return (
    <section>
      <h2>{listTitle}</h2>
      {listType === 'ordered' && <ol>{children}</ol>}
      {listType === 'unordered' && <ul>{children}</ul>}
    </section>
  );
};

export default List;
