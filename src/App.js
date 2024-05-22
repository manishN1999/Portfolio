import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Skills from "./Components/skills/Skills";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from './Components/contact/Contact';
import "./index.css";

function App() {
  return (
    <div className="App">
    
     <Navbar />
     <Home />
     <Skills />
     <Portfolio />
     <Contact />
    </div>
  );
} 

export default App;
