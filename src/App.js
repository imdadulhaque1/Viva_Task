import './App.css';
import Home from "./Component/Home";
import Second from "./Component/secondCom";
import {useState} from 'react';

function App() {
  const [val, setVal] = useState("");
  return (
    <div className="App">
        <Home val={val} setVal={setVal} />
        <Second val={val} />
    </div>
  );
}

export default App;
