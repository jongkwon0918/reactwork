import React, { useMemo, useState } from "react";
import A_PropsDrilling from "./A_PropsDrilling";
import { ContextChange, ContextTest } from "./resources/Context";
import B_UseContext_Tag from "./B_UseContext_Tag";
import B_UseContext_Hook from "./B_UseContext_Hook";
import B_UseObject from "./B_UseObject";
import B_DefaultContext from "./B_DefaultContext";
import C_ChangeContext from "./C_ChangeContext";
import C_ChangeContextValue from "./C_ChangeContextValue";
import { MyContextProvider } from "./resources/myprovider";
import D_ModuleContext from "./D_ModuleContext";
import MemberContainer from "./child/MemberContainer";
import { members } from "../../../data/exportData";
import ButtonComponent from "../props/sample/ButtonComponent";
import C_Child from "./child/C_Child";
export default function ContextContainer() {
  const [data, setData] = useState("초기값");
  const [memberList, setMembers] = useState(members);
  const [count, setCount] = useState(0);
  // const renderingTest = { data: "랜더링테스트데이터" };
  //useMemo()를 이용해서 최적화하기 -> 최신버전에서 complie가 추가되어 자동으로 처리
  const renderingTest = useMemo(() => {
    return { data: "랜더링테스트데이터" };
  }, []);
  return (
    <div>
      <h2>Context활용하기</h2>
      <p>전역에서 데이터를 공유하는 기술</p>
      <h3>props의 drilling문제</h3>
      <A_PropsDrilling data={data} />
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h2>Context활용하기</h2>
      <p>
        별도의 js파일을 생성해서 활용, createContext()함수를 이용해서 관리할
        데이터를 생성 - 생성한 데이터는 Provier를 붙여서 태그로 선언을 함. 예){" "}
        {"<"}Test.Provider value={}
        {">"}
      </p>
      <h3>기본값 전달하기</h3>
      <ContextTest.Provider value="기본데이터">
        <B_UseContext_Tag />
        <B_UseContext_Hook />
      </ContextTest.Provider>
      <ContextTest.Provider value={{ name: "박종권", age: 20 }}>
        <B_UseObject />
      </ContextTest.Provider>

      <h3>설정된 기본값 가져오기</h3>
      <p>
        Provider를 설정하지 않고 Context값을 가져오면 생성시 인수로 설정한
        기본값을 가져옴
      </p>
      <B_DefaultContext />
      <h3>context데이터 수정하기</h3>
      <ContextChange.Provider value="1234">
        <C_ChangeContext />
      </ContextChange.Provider>
      <h3>반응성 있는 context 데이터</h3>
      <p>state데이터와 연동해서 처리함</p>
      <ContextChange.Provider value={{ data: data, setData: setData }}>
        <C_ChangeContextValue />
      </ContextChange.Provider>

      <h3>context 모듈화 처리하기</h3>
      <p>
        resources폴더에 provider를 반환하는 함수, consumer함수를 선언한 jsx를
        생성하고 provider를 불러와 사용
      </p>
      <MyContextProvider>
        <D_ModuleContext />
      </MyContextProvider>

      <ContextChange.Provider value={{ memberList, setMembers }}>
        <MemberContainer />
      </ContextChange.Provider>

      <h3>랜더링 문제</h3>
      <p>
        context와 상관없는 데이터를 변경하더라도 같이 랜더링되는 문제가 발생{" "}
        <br />
        최적화 context 데이터에 useMemo()를 이용
      </p>
      <ContextTest.Provider value={renderingTest}>
        <ButtonComponent
          variant="warn"
          size="small"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          증가 : {count}
        </ButtonComponent>
        <C_Child />
      </ContextTest.Provider>
    </div>
  );
}
