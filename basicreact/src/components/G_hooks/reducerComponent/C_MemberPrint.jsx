import React, { useReducer } from "react";
import { formMemberReducer } from "../reducers/Reducer";

export default function C_MemberPrint() {
  const [member, dispatch] = useReducer(formMemberReducer, {});
  return (
    <div>
      <ul>
        {Object.entries(member).map((m) => (
          <li>
            {m[0]} : {m[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}
