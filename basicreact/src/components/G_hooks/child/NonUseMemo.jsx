import React, { useState } from "react";

export default function NonUseMemo() {
  const [num, setNum] = useState();

  //느린계산
  const slowSquare = (n) => {
    console.log("매우 느린 계산을 수행중.....");
    let result = n * n;
    for (let i = 0; i < 1_000_000_000; i++) {
      result = result + i;
    }
    return result;
  };
  return (
    <div>
      <h2>느린 계산기</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <p>결과 : {slowSquare(10)}</p>
    </div>
  );
}
