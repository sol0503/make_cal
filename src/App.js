import { useState } from "react";
import Length from "./Length";
import Time from "./Time";
import Volume from "./Volume";

function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div className="App">
      <h3>단위변환 계산기</h3>;
      <select value={index} onChange={onSelect}>
        <option value={0}>분(m)&시간(h)변환</option>
        <option value={1}>마일(mile)&킬로마일(km)변환</option>
        <option value={2}>리터(l)&온스(oz)변환</option>
      </select>
      <hr />
      {index === "0" ? <Time /> : null}
      {index === "1" ? <Length /> : null}
      {index === "2" ? <Volume /> : null}
    </div>
  );
}

export default App;
