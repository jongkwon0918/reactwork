import React, { useState, useMemo } from "react";
import { products } from "@/data/exportData.js";
export default function DataFilterCom() {
  const [minPrice, setMinPrice] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [theme, setTheme] = useState("light");

  const filterProducts = () => {
    console.log("필터함수 실행");
    //조회된 상품을 정렬해서 출력기능 제공
    //가격 기준으로 필터하기
    let result = products.filter((p) => p.price >= minPrice);
    // 이름을 기준으로 필터하기
    if (keyword.trim() !== "") {
      result = result.filter((p) => p.productName.includes(keyword));
    }
    //정렬
    result.sort((p, n) => p.price - n.price);

    return result;
  };
  const filterProductMemo = useMemo(() => {
    return filterProducts();
  }, [minPrice, keyword]);
  return (
    <div style={{ marginBottom: "1rem", backgroundColor: { theme } }}>
      <h4>고정데이터 리스트 필터하기</h4>
      <h4>상품목록</h4>
      {["white", "black"].map((v) => {
        return (
          <label>
            <input
              type="radio"
              name="theme"
              value={v}
              onClick={(e) => {
                setTheme(e.target.value);
              }}
            />
            {v}
          </label>
        );
      })}
      <div style={{ marginBottom: "1rem" }}>
        <label>
          최소가격 :{" "}
          <input
            type="number"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(Number(e.target.value));
            }}
          />
        </label>
        <br />
        <br />
        <label>
          상품명 검색 :{" "}
          <input
            type={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </label>
        <ul>
          {
            /* {filterProducts().map((p) => { */
            filterProductMemo.map((p) => {
              return (
                <li>
                  {p.productName} {p.price}
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}
