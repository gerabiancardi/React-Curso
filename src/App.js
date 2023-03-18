import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ItemListContainer />

<Routes>
<Route path="*" element={<ErrorPage/>} />
</Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
