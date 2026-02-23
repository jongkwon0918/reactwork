import React from "react";
import { useSelector } from "react-redux";

export default function CounterComponent() {
  //state값 가져오기
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h3>리덕스를 이용해서 카운터 기능 구현하기</h3>
      <p>현재 숫자 : {count}</p>
      <button>증가</button>
      <button>감소</button>
    </div>
  );
}
