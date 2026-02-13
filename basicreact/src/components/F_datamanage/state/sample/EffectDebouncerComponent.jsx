import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import TableHeadComponent from "../../props/sample/TableHeadComponent";

export default function EffectDebouncerComponent() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      if (response.ok) {
        const data = await response.json();
        const myproduct = data.products.reduce((arr, product) => {
          const {
            id,
            title,
            category,
            price,
            rating,
            stock,
            brand,
            weight,
            images,
            thumbnail,
          } = product;
          arr.push({
            id,
            title,
            category,
            price,
            rating,
            stock,
            brand,
            weight,
            images,
            thumbnail,
          });
          return arr;
        }, []);
        setProductList(myproduct);
        setLoading(false);
      }
    })();
  }, []);
  const productContent = (content) => {
    const reg = /.(png|jpg|jpeg|webp)$/i;
    if (Array.isArray(content)) {
      return content.map((c) => {
        if (reg.test(c.toString())) {
          return <img src={c.toString()} width="100" height="100" />;
        } else {
          return Object.values(c).map((t) => <p>{t}</p>);
        }
      });
    } else if (typeof content == "object") {
      return Object.values(content).map((c) => <span>{c}</span>);
    } else {
      //일반데이터 -> String
      if (reg.test(content)) {
        return <img src={content} width="100" height="100" />;
      } else return <span>{content}</span>;
    }
  };

  return (
    <div>
      <h3>상품리스트확인</h3>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <table>
          <TableHeadComponent header={Object.keys(productList[0])} />
          <tbody>
            {productList.map((product, i) => (
              <tr key={product.id}>
                {Object.values(product).map((p, i) => (
                  <td key={i}>{productContent(p)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
