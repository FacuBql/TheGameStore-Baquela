import NavBar from "./components/NavBar";
import "./estilos.scss";
import Container from "./components/Container";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/catalogo/losmaspedidos"
            element={<ItemListContainer />}
          />
          <Route
            path="/losmaspedidos/:rdr2"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
