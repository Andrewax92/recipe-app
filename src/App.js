import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Edit from './pages/edit/Edit';
import Navbar from './components/Navbar';


import './App.css'



// page components 


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App
