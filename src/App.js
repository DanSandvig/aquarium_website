import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './css/App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Fish from "./components/Fish.jsx";
import SpecificFish from "./components/SpecificFish";


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/fish" element={<Fish/>}/>

          <Route path="/fish/2" element={<SpecificFish/>}/>

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
