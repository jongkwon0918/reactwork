import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  setValue,
} from "../features/counter/counterSlice";
import { useState } from "react";
export default function CounterComponent() {
  //state값 가져오기
  const count = useSelector((state) => state.counter.value);
  //state를 수정하려면 dispatch()함수를 이용
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h3>리덕스를 이용해서 카운터 기능 구현하기</h3>
      <p>현재 숫자 : {count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소
      </button>
      <input
        type="number"
        placeholder="설정할 숫자"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(inputValue));
        }}
      >
        값만큼 증가
      </button>
      <button
        onClick={() => {
          dispatch(setValue(inputValue));
        }}
      >
        초기화
      </button>
    </div>
  );
}
