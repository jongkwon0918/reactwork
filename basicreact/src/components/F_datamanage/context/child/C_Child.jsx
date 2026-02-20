import React, { memo, useContext, useRef } from "react";
import { ContextTest } from "../resources/Context";
function useRenderCount() {
  const ref = useRef(0);
  ref.current += 1;
  return ref.current;
}
function C_Child() {
  const contextData = useContext(ContextTest);
  const renders = useRenderCount();
  return (
    <div>
      <h4>contextData출력 : {contextData.data}</h4>
      <p>랜더링 수 :{renders}</p>
    </div>
  );
}
export default memo(C_Child);
