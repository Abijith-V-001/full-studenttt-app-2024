import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import Search from './Components/Search';
import Delete from './Components/Delete';
import View from './Components/View';

function App() {
  return (
    <div className="App">
      <AddStudent />
      <Search />
      <Delete />
      <View />
    </div>
  );
}

export default App;
