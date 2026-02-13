import React, { useEffect, useState } from "react";
import EffectDebouncerComponent from "./sample/EffectDebouncerComponent";
//useEffect(()=>{}) : 매번 (과부하 주의!)

//useEffect(()=>{},[]) : 처음 한 번만

//useEffect(()=>{},[값]) : 그 값이 변할 때만
export default function F_EffectStateComponent() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  //페이지가 렌더링될때마다 실행!
  useEffect(() => {
    console.log("실행됨!!!!");
  });
  //state데이터인 data값이 변경되면 실행되는 함수
  useEffect(() => {
    console.log("data 수정됨!!!");
  }, [data]);
  const changeData = (e) => {
    setData(e.target.value);
  };
  const changeData2 = (e) => {
    setData2(e.target.value);
  };
  return (
    <div>
      <h3>data수정하기</h3>
      <input type="text" name="data" onChange={changeData} />
      <h4>data : {data}</h4>
      <h3>data2수정하기</h3>
      <input type="text" name="data" onChange={changeData2} />
      <h4>data2 : {data2}</h4>

      <EffectDebouncerComponent />
    </div>
  );
}
