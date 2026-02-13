import React, { useEffect, useState } from "react";
import { products } from "@/data/exportData";
import ProductList from "./sample/ProductList";
import LocadingComponent from "./sample/LoadingComponent";

export default function E_LoadingTest() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //페이지로딩 후 한번만 실행하는 함수
  useEffect(() => {
    setTimeout(() => {
      setProductList(products);
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <h3>데이터를 가져와 출력할때 딜레이타임에 로딩페이지 출력하기</h3>
      <p>
        E_LodingTest페이지가 로딩되면 3초후에 products데이터를 state값에 저장
        데이터를 가져오기 전에는 로딩중이라는 화면을 출력하고, 데이터 저장이
        끝나면 ProductListComponent로 상품리스트를 출력하기
      </p>
      {isLoading ? (
        <LocadingComponent text="로딩중" />
      ) : (
        <ProductList products={productList} setProducts={setProductList} />
      )}

      
    </div>
  );
}
