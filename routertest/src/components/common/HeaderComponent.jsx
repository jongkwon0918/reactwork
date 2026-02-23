import React from "react";
import { headerNav } from "../../resources/commondata";
import { Link } from "react-router-dom";
const style = {
  display: "flex",
  margin: 0,
  padding: 0,
  width: "100%",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  listStyle: "none",
};
export default function HeaderComponent() {
  return (
    <ul style={style}>
      {headerNav.map((l) => {
        return (
          <Link to={l.path} key={l.path}>
            {l.label}
          </Link>
        );
      })}
    </ul>
  );
}
