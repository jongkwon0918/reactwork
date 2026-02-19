import { createContext, useState, useContext } from "react";

//context객체를 생성
const MyContext=createContext();

//provider 객체를 선언
export const MyContextProvider=({children})=>{
    const [data, setData]=useState({id:'',pw:''});
    return <MyContext.Provider value={{data, setData}}>
        {children}
    </MyContext.Provider>
};

//consumer반환하기
export const useMyContext=()=>{
    const data=useContext(MyContext);
    if(!data) throw new Error("MyContextProvider태그의 자식태그가 아닙니다.");
    return data;
};