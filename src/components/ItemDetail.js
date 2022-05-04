const ItemDetail = ({ products }) => {
  return (
    <section>
      {products.map((products) => {
        return <ItemDetail key={products.id} products={products} />;
      })}
    </section>
  );
};
export default ItemDetail;
