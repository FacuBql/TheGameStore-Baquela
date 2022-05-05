import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article>
      <h3>{product.name}</h3>
      <p>Precio: {product.price}</p>
      <Link to="/losmaspedidos/:rdr2" className="nav__link">
        <button onClick={handleClick}>Más información</button>
      </Link>
    </article>
  );
};

export default Item;
