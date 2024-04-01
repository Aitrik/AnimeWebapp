import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Cms/Home';
import Characters from './Cms/Characters';
import Anime_details from './Cms/Anime_details';
import Search from './Cms/Search';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/:id' element={<Anime_details />} />
          <Route path='/search/:id' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
