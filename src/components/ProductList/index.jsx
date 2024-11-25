import React from 'react';
import Product from '../Product';

class ProductList extends React.Component {
  state = {
    isReverseOrder: false,
  };

  handleSwitchOrder = () => {
    this.setState({
      isReverseOrder: !this.state.isReverseOrder
    });
  }

  render() {
    const { products } = this.props;
    const { isReverseOrder } = this.state;

    const productsComponents = products.map((product) => {
      // Взаємодія Батько - Дитина (пропси)
      return <Product key={product.id} product={product} handleSwitchOrder={this.handleSwitchOrder} />;
    });

    return (
      <article>
        <h2>Products</h2>
        <p>Sorting order: {isReverseOrder ? 'reverse' : 'straight'}</p>
        <button onClick={this.handleSwitchOrder}>Switch order</button>
        {isReverseOrder? productsComponents.reverse() : productsComponents}
      </article>
    );
  }
}

export default ProductList;
