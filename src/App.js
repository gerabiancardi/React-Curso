import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "../src/context/CartContext";
import Cart from "../src/components/Cart/Cart"

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
