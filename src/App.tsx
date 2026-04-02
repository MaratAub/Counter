import './App.css'
import {useState} from "react";
import {SettingsCard} from "./components/SettingsCard.tsx";
import {CounterCard} from "./components/CounterCard.tsx";


function App() {


  // Активные значения, по которым работает счетчик
  const [currentMax, setCurrentMax] = useState<number>(5);
  const [currentStart, setCurrentStart] = useState<number>(0);
  // Текущее число на табло
  const [count, setCount] = useState<number>(0);



  // Обработчики
  const incHandler = () => {
    if (count < currentMax) setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(currentStart);
  };

  const setSettingsHandler = (max:number, start:number) => {
    setCurrentMax(max);
    setCurrentStart(start);
    setCount(start);
  };

  return (
    <div className="app-container">
      <div className="wrapper">
        {/* Блок настроек */}
        <SettingsCard onSet={setSettingsHandler} currentMax={currentMax} currentStart={currentStart}/>
        {/* Блок счетчика */}
        <CounterCard count={count} currentMax={currentMax} onInc={incHandler} onReset={resetHandler}/>
      </div>
    </div>
  );
}
export default App
