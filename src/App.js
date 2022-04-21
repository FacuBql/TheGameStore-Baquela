import NavBar from "./components/NavBar";
import "./estilos.scss";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"Los mejores estrenos, clásicos y ofertas en un solo lugar."}
      />
    </>
  );
};
export default App;
