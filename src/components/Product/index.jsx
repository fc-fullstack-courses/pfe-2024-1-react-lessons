import React from 'react';

class Product extends React.Component {
  render() {
    const {
      product: { id, name, price, desicription },
    } = this.props;

    return (
      <article id={`product-${id}`}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{desicription}</p>
      </article>
    );
  }
}

export default Product;
