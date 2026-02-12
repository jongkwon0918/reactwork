import React from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponent from "./TableBodyComponent";

export default function TableComponent({ data }) {
  console.log(data);
  return (
    <div>
      <table>
        <TableHeadComponent hedaer={Object.keys(data[0])} />
        <TableBodyComponent body={data} headersize={Object.keys(data[0]).length}/>
      </table>
    </div>
  );
}
