//named export 가져오기
import { Test, data } from "./components/exporttest/A_namedexport.jsx";
//default export
import DefaultExportTest from "./components/exporttest/B_DefaultExport.jsx";

import A_ClassComponent from "./components/A_componenttest/A_ClassComponent.js";
import B_FunctionalComponent from "./components/A_componenttest/B_FunctionalComponent.js";
import A_lifecycle_class from "./components/B_lifecycle/A_lifecycle_class.jsx";
import B_lifecycle_function from "./components/B_lifecycle/B_lifecycle_function.jsx";
import A_basicjsx from "./components/C_JSX/A_basicjsx.jsx";
import B_Usejavascript from "./components/C_JSX/B_Usejavascript.jsx";
import C_UseControl from "./components/C_JSX/C_UseControl.jsx";
import D_ExportData from "./components/C_JSX/D_ExportData.jsx";
import A_BasicStyle from "./components/D_style/A_BasicStyle.jsx";
import B_ModuleTest from "./components/D_style/B_ModuleTest.jsx";
import C_styledComponent from "./components/D_style/C_styledComponent.jsx";
import A_EventContainer from "./components/E_event/A_EventContainer.jsx";

function App() {
  return (
    <>
      <h1>기본 컴포넌트 선언하기</h1>

      <h2>클래스형 컴포넌트 사용</h2>
      <A_ClassComponent title="이제 점심시간"></A_ClassComponent>

      <h2>함수형 컴포넌트 사용</h2>
      <B_FunctionalComponent></B_FunctionalComponent>

      <h1>라이프사이클 이용</h1>
      {/* <A_lifecycle_class title="test"></A_lifecycle_class> */}
      <B_lifecycle_function></B_lifecycle_function>

      <h1>jsx문법 활용</h1>
      <A_basicjsx />
      <B_Usejavascript />

      <h1>jsx에서 조건문 활용하기</h1>
      <C_UseControl />

      <h1>외부데이터 가져와 컴포넌트해 출력하기</h1>
      <D_ExportData />

      <h1>스타일 적용하기</h1>
      <A_BasicStyle />
      <B_ModuleTest />
      <C_styledComponent />

      <h1>이벤트 이용하기</h1>
      <A_EventContainer />
    </>
  );
}

export default App;
