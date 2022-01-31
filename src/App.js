import 'bootstrap/dist/css/bootstrap.min.css';
//my own css 
import './styles.css';

import Navbar from './components/Navbar'; //import from Navbar
import Intro from './components/Intro'; // import from Intro

//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>
  );
}

export default App;
