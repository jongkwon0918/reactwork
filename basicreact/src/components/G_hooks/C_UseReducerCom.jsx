import React from "react";
import C_ReducerCounterComponent from "./reducerComponent/C_ReducerCounterComponent";
import C_MemberReducer from "./reducerComponent/C_MemberReducer";
import C_MemberPrint from "./reducerComponent/C_MemberPrint";

export default function C_UseReducerCom() {
  return (
    <div>
      <h4>useReducer() 이용하기</h4>
      <p>데이터의 상태를 관리하기 위한 hook</p>
      <p>
        state보다 복잡한 상태를 처리할때 사용, 데이터와 화면로직을 분리할 수
        있음,
      </p>
      <div>
        useReducer()데이터 처리 구조
        <ol>
          <li>
            1. Reducer함수 생성
            <p>
              - 요청하는 내용에 따라 새로운 상태(불변성유지)를 반환해주는 함수
            </p>
            <p>
              - 상태값을 type에 따라 수정, 초기화 등 데이터를 다루는 작업을 실행
            </p>
            <p>
              - state, action의 매개변수를 받는 함수를 선언 <br />
              - state : 현재 reducer가 관리하고 있는 값 / useReducer 호출시
              전달한 초기값이 저장 <br />- action : 데이터 조작 요청시 전달되는
              데이터를 저장한 객체
            </p>
            <p>
              action에 저장된 데이터는 구조화해서 관리해야함. 예) type:"",
              value/payload:""
            </p>
          </li>
          <li>
            2. useReducer()함수로 reducer함수 이용
            <p>
              - 매개변수레 선언한 reducer함수(필수)와 초기값(선택) 전달할 수
              있음
            </p>
          </li>
        </ol>
      </div>
      <h2>간단한 카운터 리듀서 만들기</h2>
      <C_ReducerCounterComponent />
      <h2>회원저장 리듀스 만들기</h2>
      <C_MemberReducer />
      <C_MemberPrint />
    </div>
  );
}
