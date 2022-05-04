import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const catalog = [
  {
    id: 1,
    name: <h1>Red Dead Redepmtion 2</h1>,
    image: <img
    src="https://i.pinimg.com/originals/ee/3f/8e/ee3f8ed0c8288f4ccc3b24ccb64c1878.jpg"
    height={500}
    width={300}
  ></img>,
    description: <p>
    América, 1899. Con los representantes de la ley dando caza a las últimas
    bandas de forajidos, el fin del Salvaje Oeste es ya una realidad.
    Aquellos que no se rinden o sucumben son eliminados. Después de que un
    atraco se vaya al traste en la ciudad de Blackwater, Arthur Morgan y la
    banda de Van der Linde se ven obligados a huir. Con los agentes
    federales y los mejores cazarrecompensas de la nación pisándoles los
    talones, deberán atracar, robar y abrirse camino a la fuerza por el
    implacable corazón de América para poder sobrevivir.
  </p>,
    price: 6000,
  },
]


const ItemDetailContainer = () => {
  const [delay, setDelay] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const purchase = new Promise((res) => {
      setTimeout(() => {
        res(catalog);
      }, 2000);
    });

    purchase.then(() => {
      console.log("El pedido ha sido agregado al carrito.");
      setDelay(false);
      setProducts(catalog);
    });
  }, []);

  if (delay) {
    return <p>Cargando...</p>;
  } else {
    return <ItemDetail products={products}/>;
  }
};

export default ItemDetailContainer;
