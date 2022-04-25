import { useState } from "react";

const ItemCount = ({ init, stock, onAdd }) => {
  const [counter, setCounter] = useState(init);
  const [success, setSuccess] = useState(false);

  const add = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1);
  };

  const confirm = () => {
    //onAdd(counter);
    if (counter <= stock) {
      setSuccess(true);
    } else if (counter < stock) {
      setSuccess(false);
    }
  };

  var stock = 10;

  if (success) {
    return (
      <div>
        <p>Unidades agregadas: {counter}</p>
        <button onClick={remove}>-</button>
        <button onClick={confirm}>Agregar</button>
        <button onClick={add}>+</button>
        <p>Agregado al carrito exitosamente.</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Unidades agregadas: {counter}</p>
        <button onClick={remove}>-</button>
        <button onClick={confirm}>Agregar</button>
        <button onClick={add}>+</button>
      </div>
    );
  }
};

export default ItemCount;
