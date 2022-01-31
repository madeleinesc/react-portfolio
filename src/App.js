import 'bootstrap/dist/css/bootstrap.min.css';
//my own css 
import './styles.css';

import Navbar from './components/Navbar'; //import from Navbar
import Intro from './components/Intro'; // import from Intro
import About from './components/About'; // import from About
import Work from './components/Work'; // import from Work

//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
    </div>
  );
}

export default App;
