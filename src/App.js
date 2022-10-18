import './App.css';
import Navbar from './Components/Sheare/Header/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className="">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
