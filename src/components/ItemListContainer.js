const ItemListContainer = (props) => {
  return <div className="greeting">{props.greeting}</div>;
};

const Greeting = () => {
  return (
    <div>
      <ItemListContainer greeting="Los mejores estrenos, clásicos y ofertas en un solo lugar." />
    </div>
  );
};

export default Greeting;
