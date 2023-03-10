import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Productos from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="No tengo Items Al Momento" />
      <Productos />
    </div>
  );
}

export default App;
