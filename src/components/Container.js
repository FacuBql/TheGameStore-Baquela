import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Container = (props) => {
  return (
    <div className="greeting">
      <p>{props.greeting}</p>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
};

export default Container;
