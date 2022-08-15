import { useState } from "react";

const Length = () => {
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const onInvert = () => {
    reset();
    setInvert(!invert);
  };

  const reset = () => {
    setAmount(0);
  };
  return (
    <div className="Length">
      <h4>마일(mile)&킬로마일(km)변환</h4>
      <div className="mile">
        마일(mile):
        <input
          value={
            invert
              ? Math.round((amount / 1.61 + Number.EPSILON) * 100) / 100
              : amount
          }
          onChange={onChange}
          disabled={invert}
        />
      </div>
      <div className="km">
        킬로미터(km):
        <input
          value={invert ? amount : amount * 1.61}
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>invert</button>
    </div>
  );
};
export default Length;
