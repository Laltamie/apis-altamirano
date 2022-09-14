import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navegador/NavBar';
import Header from './components/Header/Header';


function App() {
  return (

    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/productos/invierno" element={<ItemListContainer greeting="" categoria="invierno"/>} />
        <Route path="/productos/verano" element={<ItemListContainer greeting="" categoria="verano" />} />
        <Route path="/producto/:id" element={<ItemListContainer greeting="" />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App;