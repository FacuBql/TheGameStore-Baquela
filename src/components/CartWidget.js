import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CartContext";

const CartWidget = () => {
  const { total_quantity } = useContext(context);

  return (
    <Link to="/cart">
      <span className="material-icons">shopping_cart</span>
      {total_quantity}
    </Link>
  );
};

export default CartWidget;
