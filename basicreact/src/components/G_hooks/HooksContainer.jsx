import React from "react";
import A_UseRefTest from "./A_UseRefTest";
import B_UseMemoTest from "./B_UseMemoTest";

export default function HooksContainer() {
  return (
    <div>
      <h3>Hooks 활용하기</h3>
      <p>
        함수형 컴포넌트에서 리엑트의 기능을 손쉽게 사용할 수 있게 해주는 함수
      </p>

      {/* useRef() -> 태그, */}
      <A_UseRefTest />

      {/* useMemo() 이용하기 */}
      <B_UseMemoTest />
    </div>
  );
}
