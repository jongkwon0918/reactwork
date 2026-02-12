import React from "react";

export default function TableHeadComponent({ hedaer = [] }) {
  return (
    <>
      <thead>
        <tr>
        {hedaer.map((h, i) => (
          <th key={`${h}_${i}`}>{h}</th>
        ))}
        </tr>
      </thead>
    </>
  );
}
