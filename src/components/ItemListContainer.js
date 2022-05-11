import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const initialProducts = [
  {
    id: 1,
    name: "Metal Gear Solid",
    price: 2000,
    quantity: 5,
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    price: 6000,
    quantity: 5,
  },
  {
    id: 3,
    name: "Elden Ring",
    price: 8000,
    quantity: 5,
  },
];

const ItemListContainer = () => {
  const [delay, setDelay] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const purchase = new Promise((res) => {
      setTimeout(() => {
        res(initialProducts);
      }, 2000);
    });

    purchase.then(() => {
      console.log("El pedido ha sido agregado al carrito.");
      setDelay(false);
      setProducts(initialProducts);
    });
  }, []);

  if (delay) {
    return <p>Cargando...</p>;
  } else {
    return <ItemList products={products} />;
  }
};

export default ItemListContainer;
