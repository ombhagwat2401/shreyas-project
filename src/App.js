import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Book from './components/Book';

function App() {
  return (
    <div className="bookapp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books' element={<Books />}></Route>
          <Route path='/book/:id' element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
