import ItemCount from "./ItemCount";
const ItemListContainer = (props) => {
  return (
    <div className="greeting">
      <p>{props.greeting}</p>
      <ItemCount stock={10} init={0} onAdd={() => {}} />
    </div>
  );
};

export default ItemListContainer;
