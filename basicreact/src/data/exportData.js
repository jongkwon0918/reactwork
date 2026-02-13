export const dataExport = "박종권";
export const funcExport = () => {
  return dataExport;
};

export const members = [
  { userNo: 1, userId: "admin", userName: "관리자", age: 40 },
  { userNo: 2, userId: "user01", userName: "유저일", age: 30 },
  { userNo: 3, userId: "user02", userName: "유저이", age: 20 },
  { userNo: 4, userId: "user03", userName: "유저삼", age: 10 },
];

export let letData = "원본값";

export const NumberGenerator = function* (title) {
  let count = 0;
  while (true) {
    yield `${title}_${count++}`;
  }
};

export const products = [
  {
    productNo: 1,
    productName: "맥북",
    price: 3300000,
    type: "전자기기",
    color: "회색",
  },
  {
    productNo: 2,
    productName: "라면",
    price: 1200,
    type: "식품",
    color: "빨강",
  },
  {
    productNo: 3,
    productName: "핸드폰",
    price: 2700000,
    type: "전자기기",
    color: "검정",
  },
];
