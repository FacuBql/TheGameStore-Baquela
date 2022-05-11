import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const MiCustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total_quantity, setTotal_quantity] = useState(0);
  const [total_price, setTotal_price] = useState(0);

  const addProduct = (product, quantity) => {
    if (inCart(product)) {
    } else {
      setTotal_quantity(total_quantity + quantity);
    }
  };

  const contextValue = {
    total_quantity,
    total_price,
    cart,
    addProduct,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default MiCustomProvider;
