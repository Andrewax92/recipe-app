import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Edit from './pages/edit/Edit';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelecto';
import { useTheme } from './hooks/useTheme';

import './App.css'




// page components 


function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
