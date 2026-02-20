import React from "react";
import NonUseMemo from "./child/NonUseMemo";
import UseMemoCom from "./child/UseMemoCom";
import DataFilterCom from "./child/DataFilterCom";

// 비용이 많이 드는 계산을 기억해주고 의존성이 바뀔때만 다시 계산해주는 Hooks
export default function B_UseMemoTest() {
  return (
    <div>
      <h3>useMemo()이용하기</h3>
      <p>
        랜더링최적화를 하는 Hook, 연산에 비용이 많이드는 경우 계속 실행하지 않고
        반환값을 저장하고 활용하는 기능
      </p>
      <div>
        <h4>메모를 사용하지 않는 컴포넌트</h4>
        {/* <NonUseMemo /> */}
        <h4>메모를 사용한 컴포넌트</h4>
        {/* <UseMemoCom /> */}

        <h4>필터/정렬된 데이터에 useMemo사용</h4>
        <DataFilterCom/>
        
      </div>
    </div>
  );
}
