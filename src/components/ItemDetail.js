import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";



const ItemDetail = ({ onClick }) => {
  const [counter, setCounter] = useState(0);
  const {addProduct} = useContext(context)

  const handleConfirm = () => {
    onClick("?");
  };

  return (
    <>
      <ItemCount />
      <p>Carrito: {counter}</p>
      <button>Click</button>
      <Link to="/cart" className="nav__link">
        <button onClick={handleConfirm}>Confirmar</button>{" "}
      </Link>
    </>
  );
};
export default ItemDetail;
