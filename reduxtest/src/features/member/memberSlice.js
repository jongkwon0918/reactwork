import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
  loading: false,
  error: null,
};
//비동기로 서버에 요청을 전송하는 함수
export const requestMember = createAsyncThunk(
  "members/fetchPost",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:9999/api/members");
      if (!response.ok)
        throw new Error("요청 실패 member정보를 가져올 수 없습니다.");
      const data = await response.json();
      //데이터 재조합!
      
      //return한 값은 action.payload에 저장이 됨.
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  //비동기 처리관련 내용을 설정하는 속성 -> createAsyncThunk()함수를 활용해서 선언
  extraReducers: (builder) => {
    builder
      //요청 처리 중...
      .addCase(requestMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //요청 처리 완료...
      .addCase(requestMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      //요청 실패...
      .addCase(requestMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});
export default memberSlice.reducer;
