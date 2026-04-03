import {Button} from "./Button.tsx";

type Props = {
  counterValue: number;
  maxValue: number;
  onInc: () => void;
  onReset: () => void;
}

export const CounterCard = (props:Props) => {
  const {
    counterValue,
    maxValue,
    onInc,
    onReset,
  } = props


  return (
    <div className="card">
      <div className="card-screen display-value">
          <span className={`counter-number ${ counterValue === maxValue? 'text-red' : ''}`}>
            {counterValue}
          </span>
      </div>
      <div className="card-buttons">
        <Button title={'inc'} onClick={onInc} className={'btn'} disabled={counterValue === maxValue}/>
        <Button title={'reset'} onClick={onReset} className={'btn'} />
      </div>
    </div>
  );
};

