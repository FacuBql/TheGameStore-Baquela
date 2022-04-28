import Item from "./Item";

const ItemList = ({ products }) => {
  <section>
     {products.map(product=>{
       return (
         <Item key={product.id} product={product} />
       )
     })}
  </section>
};
export default ItemList;