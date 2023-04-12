import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import DropZone from './components/DropZone';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>

      <div className='content'>

      <DropZone/>

      </div>
    </div>
  );
}

export default App;
