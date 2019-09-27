import React from "react";
import PostItem from "../components/PostList";

export default function PostList({ posts }) {
  const postItems = posts.map(post => <PostItem post={post} />);

  return <>{postItems}</>;
}
