import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={  <ItemListContainer />}/>
          <Route path='/category/:categoryId' element={  <ItemListContainer />}/>
          <Route path='/item/:Id' element={  <ItemDetailContainer />}/>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;