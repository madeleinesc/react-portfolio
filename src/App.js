import 'bootstrap/dist/css/bootstrap.min.css';
//font awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
//my own css 
import './styles.css';


import Navbar from './components/Navbar'; 
import Intro from './components/Intro'; 
import About from './components/About'; 
import Work from './components/Work'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
