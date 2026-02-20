import React, { useReducer } from "react";
import { countReducer } from "../reducers/Reducer";
import ButtonComponent from "../../F_datamanage/props/sample/ButtonComponent";
export default function C_ReducerCounterComponent() {
  const [state, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h4>counterReducer</h4>
      <h4>현재값 : {state}</h4>
      <ButtonComponent
        variant="primary"
        size="small"
        onClick={() => {
          dispatch({ type: "INCRESE" });
        }}
      >
        증가
      </ButtonComponent>
      <ButtonComponent
        variant="danger"
        size="small"
        onClick={() => {
          dispatch({ type: "DECRESE" });
        }}
      >
        감소
      </ButtonComponent>
      <ButtonComponent
        variant="warn"
        size="small"
        onClick={() => {
          dispatch({ type: "INITIAL" });
        }}
      >
        초기화
      </ButtonComponent>
    </div>
  );
}
