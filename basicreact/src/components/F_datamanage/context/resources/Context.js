import { createContext } from "react";
//컨텍스트 생성하기
export const ContextTest = createContext("basicContext");
export const ContextDefault=createContext({id:"admin", pw:"1234", email:"admin@gmail.com"});
export const ContextChange=createContext();