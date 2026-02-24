import { useEffect } from "react";
import React from "react";
import { requestPost } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PostListComponent() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    //설정된 서버에 비동기요청을 전송
    dispatch(requestPost());
  }, []);
  if (loading) {
    return <h2>posts 가져오는 중...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: "8px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
