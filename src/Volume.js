import { useState } from "react";

const Volume = () => {
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);

  const reset = () => {
    setAmount(0);
  };

  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const onInvert = () => {
    reset();
    setInvert(!invert);
  };

  return (
    <div className="Volume">
      <h4>리터(l)&온스(oz)변환</h4>
      <div className="l">
        리터(l):
        <input
          value={
            invert
              ? Math.round((amount / 33.81 + Number.EPSILON) * 100) / 100
              : amount
          }
          onChange={onChange}
          disabled={invert}
        />
      </div>
      <div className="oz">
        온스(oz):
        <input
          value={invert ? amount : amount * 33.81}
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>invert</button>
    </div>
  );
};
export default Volume;
