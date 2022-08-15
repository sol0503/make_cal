import { useState } from "react";

const Time = () => {
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlipped = () => {
    reset();
    setInvert(!invert);
  };
  return (
    <div className="Time">
      <div className="minutes">
        분:
        <input
          type="number"
          value={invert ? amount * 60 : amount}
          onChange={onChange}
          disabled={invert}
        />
      </div>
      <div className="hours">
        시간:
        <input
          type="number"
          value={invert ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onFlipped}>invert</button>
    </div>
  );
};
export default Time;
