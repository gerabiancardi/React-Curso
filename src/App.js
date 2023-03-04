import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="No tengo Items Al Momento"/>
    </div>
  );
}

export default App;
