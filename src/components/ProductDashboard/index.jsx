import React from 'react';
import ProductList from '../ProductList';
import FavoriteProducts from '../FavoriteProducts';

class ProductDashoboard extends React.Component {
  state = {
    products: [
      {
        id: 0,
        name: 'Product 1',
        price: 1235.99,
        description: 'Lorem Ipsum bla bla bla',
        isFavorite: true,
      },
      {
        id: 1,
        name: 'Product 2',
        price: 99.99,
        description: 'Lorem Ipsum bla bla bla 12324',
        isFavorite: false,
      },
      {
        id: 2,
        name: 'Product 3',
        price: 999.99,
        description: '13dsfdef f fg  fewr23rfregfrg',
        isFavorite: false,
      },
      {
        id: 3,
        name: 'Product 4',
        price: 1232132.99,
        description: '13dasdsdsadsaregfrg',
        isFavorite: true,
      },
    ],
  };

  toggleFavoriteProduct = (productId) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      } else {
        return product;
      }
    });

    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    const { products } = this.state;

    const favoriteProducts = products.filter((product) => product.isFavorite);

    return (
      <article>
        <h1>Products Dashboard</h1>
        <ProductList
          products={products}
          toggleFavoriteProduct={this.toggleFavoriteProduct}
        />
        <hr />
        {/* Взаємодія Дитина -> Дитина 
        (Product через зміну стана ProductDashoboard міняє пропси FavoriteProducts) 
        */}
        <FavoriteProducts products={favoriteProducts} />
      </article>
    );
  }
}

export default ProductDashoboard;
