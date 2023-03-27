import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import { CartProvider } from "./context/CartContex";


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/quienessomos" element={<QuienesSomos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
