import { Outlet } from "react-router-dom";
import PostList from "../PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("https://react-posts-data.onrender.com/posts");
  const resData = await response.json();
  return resData;
}
