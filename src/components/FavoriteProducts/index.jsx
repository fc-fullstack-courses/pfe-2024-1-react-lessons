function FavoriteProducts (props) {

  const { products } = props;

  const favoriteProducts = products.map((product) => {
    return <li key={product.id}>
      <p>{product.name}</p>
    </li>
  });

  return <article>
    <h2>Favorite products</h2>
    <ul>
      {favoriteProducts}
    </ul>
  </article>
}

export default FavoriteProducts;