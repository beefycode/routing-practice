import './App.css';
import {Routes,Route, Link} from "react-router-dom";
import Home from './Components/Home';
import WordorNum from './Components/WordorNum';

function App() {
  return (
    
    <div className="App">
      <h1>Routing Practice Assignment</h1>
      <Routes>

        <Route element={<Home/>} path="/"/>
        <Route element={<WordorNum />} path="/:word" />
        <Route element={<WordorNum />} path="/:word/:color/:backColor" />

      </Routes>
      
    </div>
  );
}

export default App;
