const Item = ({product}) => {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>Precio: {product.price}</p>
    </article>
  );
};

export default Item;