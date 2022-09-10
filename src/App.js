import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navegador/NavBar';

function App() {
  return (
    <div>

      <NavBar />
      <ItemListContainer greeting="" />
      <div>
        <ItemDetailContainer/>
      </div>
      

    </div>
  );
}

export default App;
