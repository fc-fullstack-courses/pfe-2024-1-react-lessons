import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

class Product extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isFavorite: false,
    // };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // state = {};

  clickHandler = () => {
    const {
      product: { id },
      toggleFavoriteProduct
    } = this.props;
    // alert('click!');

    // мутація стану. код не буде працювати правильно
    // this.state.isFavorite = true;

    // функція зміни стану 
    // приймає об'єкт властивостя якого доповнюють
    // або перезаисуть власитвості стану
    // this.setState({
    //   // newPropertyInState: 'test',
    //   isFavorite : true
    // });

    toggleFavoriteProduct(id);
  }

  render() {
    // зміна стану викличе повторне відмалювання компоненту
    // зміна пропсів також змушує ререндеритися компонент
    const {
      product: { id, name, price, description, isFavorite },
      handleSwitchOrder,
    } = this.props;

    return (
      <article id={`product-${id}`} className={styles.container}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        {/* <p>{name} is {isFavorite ? '': 'not'} favorite</p> */}
        <p>{name} is {!isFavorite && 'not'} favorite</p>
        {/* {isFavorite && <p>{name} is favorite</p>} */}
        {/* <button id='btn' onClick={() => toggleFavoriteProduct(id)}>Make Favorite</button> */}
        <button onClick={this.clickHandler}>Make Favorite</button>
        {/* Взаємодія Дитина -> Батько (коллбек, який змінює стан батька) */}
        <button onClick={handleSwitchOrder}>Change Parent order</button>
      </article>
    );
  }
}

export const productObject = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
});

Product.propTypes = {
  handleSwitchOrder: PropTypes.func,
  toggleFavoriteProduct: PropTypes.func,
  product: productObject
}

export default Product;
