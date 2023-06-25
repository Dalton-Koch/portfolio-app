import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import NavBar from './Components/NavBar.js';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen overflow-x-auto min-h-screen h-screen bg-zinc-900 bg-cover bg-center bg-no-repeat shadow border p-2">
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Home' Component={Home}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
