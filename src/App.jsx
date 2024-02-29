import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

const App = () => {
  return (
    <BrowserRouter>
      <div className='mb-10'>
        <Menu />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
