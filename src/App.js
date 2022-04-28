import NavBar from "./components/NavBar";
import "./estilos.scss";
import Container from "./components/Container";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <>
      <NavBar />
      <Container
        greeting={"Los mejores estrenos, clásicos y ofertas en un solo lugar."}
      />
    </>
  );
};
export default App;
