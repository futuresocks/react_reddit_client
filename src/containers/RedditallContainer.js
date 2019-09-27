import React, { useState, useEffect } from "react";
import SubForm from "../components/SubForm";
import postGetter from "../services/PostGetter";
import FeedsContainer from "./FeedsContainer";

export default function RedditallContainer() {
  //TODO: check localstorage for saved subreddits here
  const initialSubs = [];

  const [subs, setSubs] = useState(initialSubs);
  const [postFeeds, setPostFeeds] = useState({});

  function handleSubmit(sub) {
    setSubs(Array.from(new Set([...subs, sub])));
  }

  useEffect(() => postGetter(subs, postFeeds, setPostFeeds), [subs]);

  return (
    <>
      <SubForm handleSubmit={handleSubmit} />
      <FeedsContainer postFeeds={postFeeds} />
    </>
  );
}
