import React from "react";
import {
  dataExport,
  funcExport,
  members,
  letData,
} from "../../data/exportData.js";
export default function D_ExportData() {
  // letData="내가 바꿀거야";
  let test = dataExport;
  test += "내가 바꿀거야";
  return (
    <div>
      <h3>모듈에서 제공하는 파일을 가져와 출력하기</h3>
      <ul>
        <li>dataExport : {dataExport}</li>
        <li>{funcExport()}</li>
      </ul>
      <h3>리스트데이터 출력하기</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(members[0]).map((m) => (
              <th key={m}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m) => {
            return (
              <tr key={members.userNo}>
                {Object.values(m).map((mm) => (
                  <td key={mm}>{mm}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>{test}</h3>
    </div>
  );
}
