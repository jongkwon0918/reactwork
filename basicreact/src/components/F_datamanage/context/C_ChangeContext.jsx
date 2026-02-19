import React, { useContext } from "react";
import { ContextChange } from "./resources/Context";

export default function C_ChangeContext() {
  let changeData = useContext(ContextChange);
  return (
    <div>
      <h3>context값 수정하기</h3>
      <p>일반데이터는 let으로 선언해서 수정을 해도 랜더링이 되지 않는다.</p>
      <input
        type="text"
        onChange={(e) => {
          changeData = e.target.value;
          console.log(changeData);
        }}
      />
      <p>changeData : {changeData}</p>
    </div>
  );
}
