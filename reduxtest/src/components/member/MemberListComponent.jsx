import { useEffect } from "react";
import React from "react";
import { requestMember } from "../../features/member/memberSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PostListComponent() {
  const dispatch = useDispatch();
  const { members, loading, error } = useSelector((state) => state.members);
  useEffect(() => {
    //설정된 서버에 비동기요청을 전송
    dispatch(requestMember());
  }, []);
  if (loading) {
    return <h2>posts 가져오는 중...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {members.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(members[0]).map(
                (key, i) => i < 10 && <th key={key}>{key}</th>,
              )}
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return (
                <tr key={member.userId}>
                  {Object.values(member).map(
                    (m, i) =>
                    //   typeof m != "object" &&
                    //   typeof m != "boolean" && 
                     i < 10 && <td key={`${m}_${i}`}>{m}</td>,
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
