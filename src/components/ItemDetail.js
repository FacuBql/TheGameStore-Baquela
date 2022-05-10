import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ onClick }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleConfirm = () => {
    onClick("?");
  };
  return (
    <>
      <ItemCount />
      <p>Carrito: {counter}</p>
      <button onClick={handleClick}>Click</button>{" "}
      <Link to="/cart" className="nav__link">
        <button onClick={handleConfirm}>Confirmar</button>{" "}
      </Link>
    </>
  );
};
export default ItemDetail;
