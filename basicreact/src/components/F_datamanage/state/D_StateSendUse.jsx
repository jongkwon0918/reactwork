import React, { useState } from "react";
import ProductInput from "./sample/ProductInput";
import ProductList from "./sample/ProductList";
//부모에서 설정한 state값을 자식에게 전달하기
export default function D_StateSendUse() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h3>자식에게 state데이터 전달해서 활용하기</h3>
      <ProductList products={products} setProducts={setProducts} />
      <ProductInput setProducts={setProducts} />
    </div>
  );
}
