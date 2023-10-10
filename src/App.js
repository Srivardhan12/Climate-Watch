import './App.css';
import { useState } from 'react';
import Temperature from "./components/Temperature";
import Wind from "./components/Wind";
import SetTemperature from "./components/Rough";
import Tdetails from "./components/Tdetails";
function App() {
  const [SetTemp, setSetTemp] = useState(false)
  const updateValue = () => {
    setSetTemp(!SetTemp)
  }
  return (
    <>
      <div className="grid my-5">
        <div className="first">
          <div className="cont1">
            <Temperature />
          </div>
        </div>
        <div className="second">
          <div className="cont1">
            <Wind />
          </div>
        </div>
        <div className="third">
          <div className="cont1">
            <Tdetails />
          </div>
        </div>
      </div>
      <div className="set-max-min my-2">
        <button className="btn btn-success mb-3" onClick={updateValue}>Set Temperature</button>
        {SetTemp ? <SetTemperature /> : ""}
      </div>
    </>
  );
}

export default App;
