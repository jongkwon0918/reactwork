import React, { useState } from "react";

export default function B_StateObjectUse() {
  const [arrData, setArrData] = useState([]);
  const [objData, setObjData] = useState({
    name: "",
    age: 0,
    address: "",
    isActive: false,
  });
  const addArrData = (e) => {
    //값을 추가
    //State 값을 추가할때 항상 새로운 값을 생성해서 덮어쓰기함.
    //수정할 때 비동기로 데이터를 수정함. -> 수정할 때 주의~
    const v = e.target.value;
    setArrData([...arrData, v]);
  };
  return (
    <div>
      <h3>객체, 배열 state활용하기</h3>
      <p>state에 있는 객체를 출력할때 함수를 이용해서 JSX를 만들어서 출력</p>

      <h4>배열 출력하기</h4>
      <p>{arrData.length == 0 ? "배열 데이터 없음" : arrData}</p>

      <h4>객체 출력</h4>
      <p>
        {Object.keys(objData).length === 0 ? "빈객체" : Object.keys(objData)}
      </p>
      <h4>배열의 값을 추가하기</h4>
      <input type="text" onChange={addArrData} />

      <h4>배열리스트로 출력하기</h4>
      <ul>
        {arrData.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
