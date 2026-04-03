import './App.css'
import {useEffect, useState} from "react";
import {SettingsCard} from "./components/SettingsCard.tsx";
import {CounterCard} from "./components/CounterCard.tsx";


function App() {

  const [maxValue, setMaxValue] = useState<number>(() =>
    Number(localStorage.getItem("maxValue") || 10)
  );
  const [startValue, setStartValue] = useState<number>(() =>
    Number(localStorage.getItem("startValue") || 0)
  );
  const [counterValue, setCounterValue] = useState<number>(() => {
    const saved = localStorage.getItem("counterValue");
    return saved ? JSON.parse(saved) : Number(localStorage.getItem("startValue") || 0);
  });


  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startValue));
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
  }, [startValue, maxValue]);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(counterValue));
  }, [counterValue]);

  // Обработчики
  const incCounter = () => {
    if (counterValue < maxValue) setCounterValue(counterValue + 1);
  };

  const resetCounter = () => {
    setCounterValue(startValue);
  };

  const setCounterSettings = (max:number, start:number) => {
    setMaxValue(max);
    setStartValue(start);
    setCounterValue(start);
  };

  return (
    <div className="app-container">
      <div className="wrapper">
        {/* Блок настроек */}
        <SettingsCard onSet={setCounterSettings}
                      maxValue={maxValue}
                      startValue={startValue}
        />
        {/* Блок счетчика */}
        <CounterCard counterValue={counterValue}
                     maxValue={maxValue}
                     onInc={incCounter}
                     onReset={resetCounter}
        />
      </div>
    </div>
  );
}
export default App
