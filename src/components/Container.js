import ItemListContainer from "./ItemListContainer";

const Container = (props) => {
  return (
    <div className="greeting">
      <p>{props.greeting}</p>
      <ItemListContainer/>
    </div>
   


  );
};

export default Container;
