import React from "react";
import SubContainer from "./SubContainer";

export default function FeedsContainer({ postFeeds }) {
  const subContainers = Object.keys(postFeeds).map(sub => {
    return <SubContainer sub={sub} posts={postFeeds[sub]} />;
  });

  return <div>{subContainers}</div>;
}
