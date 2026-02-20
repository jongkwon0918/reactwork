import React, { useState, useMemo } from "react";
import ButtonComponent from "../../F_datamanage/props/sample/ButtonComponent";

export default function UseMemoCom() {
  const [num, setNum] = useState();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const style = {
    padding: "1rem",
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  //느린계산
  const slowSquare = () => {
    console.log("매우 느린 계산을 수행중.....");
    let result = num * num;
    for (let i = 0; i < 1_000_000_000; i++) {
      result = result + i;
    }
    return result;
  };
  //useMemo 설정하기
  const memoData = useMemo(() => {
    return slowSquare();
  }, [num]);
  return (
    <div style={style}>
      <h2>느린 계산기</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <p>결과 : {memoData}</p>
      {/* 계산과 테마변경 랜더링을 달리함 */}
      <ButtonComponent onClick={toggleTheme}>테마 변경하기</ButtonComponent>
    </div>
  );
}
