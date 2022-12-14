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
  const onInvert = () => {
    reset();
    setInvert(!invert);
  };
  return (
    <div className="Time">
      <h4>분(m)&시간(h)변환</h4>
      <div className="minutes">
        분(m):
        <input
          type="number"
          value={invert ? amount * 60 : amount}
          onChange={onChange}
          disabled={invert}
        />
      </div>
      <div className="hours">
        시간(h):
        <input
          type="number"
          value={invert ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>invert</button>
    </div>
  );
};
export default Time;
