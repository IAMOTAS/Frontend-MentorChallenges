
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown';

function App() {

      const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="App">
     
        <div className='content'>
        <Dropdown buttonText = 'Dropdown button' content ={<p>Hello world</p>}/>
        </div>

    </div>
  );
}

export default App;
