import CounterComponent from "./components/CounterComponent";
import PostListComponent from "./components/posts/PostListComponent";
import PostsContainer from "./components/PostsContainer";
import TodoContainer from "./components/TodoContainer";
import MemberContainer from "./components/MemberContainer";

function App() {
  return (
    <>
      <h2>RTX를 이용한 리덕스 적용하기</h2>
      <h3>counter기능 구현하기</h3>
      <CounterComponent />
      <h3>TodoList 기능 구현하기</h3>
      <TodoContainer />
      <h3>서버데이터 출력하기</h3>
      <PostsContainer />
      <MemberContainer />
    </>
  );
}

export default App;
