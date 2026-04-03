import {type ChangeEvent, useState} from "react";
import {Button} from "./Button.tsx";

type Props = {
  onSet:(max:number, start: number) => void;
  maxValue:number;
  startValue:number;
}

export const SettingsCard = (props:Props) => {
  const {
    onSet,
    maxValue,
    startValue,
  } = props

  const [maxInput, setMaxInput] = useState<number>(maxValue);
  const [startInput, setStartInput] = useState<number>(startValue);

  const isError = startInput >= maxInput || startInput < 0 || maxInput < 0;

  const onSetHandler = () => {
    if (!isError) {
      onSet(maxInput, startInput);
    }
  }


  return (
    <div className="card">
      <div className="card-screen settings-inputs">
        <div className="input-group">
          <label>max value:</label>
          <input
            type="number"
            className={isError ? 'input-error' : ''}
            value={maxInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxInput(+e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>start value:</label>
          <input
            type="number"
            className={isError ? 'input-error' : ''}
            value={startInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStartInput(+e.target.value)}
          />
        </div>
      </div>
      <div className="card-buttons">
        <Button title={'set'} onClick={onSetHandler} className={'btn btn-big'} disabled={isError}/>
      </div>
    </div>

  );
};

