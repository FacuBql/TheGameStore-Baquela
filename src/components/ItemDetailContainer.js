import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [delay, setDelay] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const purchase = new Promise((res) => {
      setTimeout(() => {
        res(ItemDetail);
      }, 2000);
    });

    purchase.then(() => {
      console.log("El pedido ha sido agregado al carrito.");
      setDelay(false);
      setProducts(ItemDetail);
    });
  }, []);

  if (delay) {
    return <p>Cargando...</p>;
  } else {
    return <ItemDetail />;
  }
};

export default ItemDetailContainer;
