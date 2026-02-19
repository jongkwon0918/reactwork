import React, { useContext, useState } from "react";
import { ContextChange } from "../resources/Context";
import ButtonComponent from "../../props/sample/ButtonComponent";
export default function MemberInput() {
  const { memberList, setMembers } = useContext(ContextChange);
  const [member, setMember] = useState({});
  const inputMember = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h3>회원 등록</h3>
      <div className="flex flex-col">
        {Object.keys(memberList[0]).map((k, i) => {
          return (
            <input
              className="mb-2"
              key={`${k}_${i}`}
              type="text"
              value={member[k]}
              name={k}
              placeholder={`${k}를 입력하세요`}
              onChange={inputMember}
            />
          );
        })}
        <ButtonComponent
          vraiant="primary"
          size="small"
          onClick={(e) => {
            setMembers((prev) => {
              return [...prev, member];
            });
            setMember((prev) => {
              // [userNo,userId,userName,age]
              return Object.keys(prev).reduce((o, v) => {
                //o[userNo]=""; 1.
                //o[userId]=""; 2.
                //o[userName]=""; 3.
                o[v] = "";
                return o;
              }, {});
            });
            // 아래와 같은 이야기
            // setMember({
            //   userNo: "",
            //   userId: "",
            //   userName: "",
            //   age: "",
            // });
          }}
        >
          추가
        </ButtonComponent>
      </div>
    </div>
  );
}
