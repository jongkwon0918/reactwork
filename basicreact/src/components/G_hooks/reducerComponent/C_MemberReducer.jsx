import React, { useReducer } from "react";
import { formMemberReducer } from "../reducers/Reducer";

export default function C_MemberReducer() {
  const [member, dispatch] = useReducer(formMemberReducer, {});
  const changeMemberData = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADD", field: e.target.name, payload: e.target.value });
  };
  return (
    <div>
      <h3>회원가입</h3>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="userId"
          value={member.userId}
          onChange={changeMemberData}
        />
        <input
          type="password"
          name="password"
          value={member.password}
          onChange={changeMemberData}
        />
        <input
          type="text"
          name="userName"
          value={member.userName}
          onChange={changeMemberData}
        />
        <input
          type="checkbox"
          name="agreed"
          value={member.agreed}
          onChange={changeMemberData}
        />
        개인정보 동의
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          저장 취소
        </button>
      </form>
      <div>
        {/* member가 객체라서 map을 쓸 수 있게 Object.entries를 써야함*/}
        {Object.entries(member).map((m) => (
          <p key={m[0]}>
            {m[0]} : {m[1]}
          </p>
        ))}
      </div>
    </div>
  );
}
