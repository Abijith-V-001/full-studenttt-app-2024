import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import Search from './Components/Search';
import Delete from './Components/Delete';
import View from './Components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddStudent/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/delete' element={<Delete/>}/>
  <Route path='/view' element={<View/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
