import {Button} from "./Button.tsx";

type Props = {
  count: number;
  currentMax: number;
  onInc: () => void;
  onReset: () => void;
}

export const CounterCard = (props:Props) => {
  const {
    count,
    currentMax,
    onInc,
    onReset,
  } = props

  return (
    <div className="card">
      <div className="card-screen display-value">
            <span className={`counter-number ${count === currentMax ? 'text-red' : ''}`}>
              {count}
            </span>
      </div>
      <div className="card-buttons">
        <Button title={'inc'} onClick={onInc} className={'btn'} disabled={count === currentMax}/>
        <Button title={'reset'} onClick={onReset} className={'btn'} />
      </div>
    </div>
  );
};

