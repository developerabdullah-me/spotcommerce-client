import './App.css';
import Navbar from './Components/Sheare/Header/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div className="">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
