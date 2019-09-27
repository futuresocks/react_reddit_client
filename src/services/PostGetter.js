export default function postGetter(subs, postFeeds, setPostFeeds) {
  const subsToFetch = subs.filter(sub => {
    if (!postFeeds.hasOwnProperty(sub)) {
      return sub;
    }
  });

  const promises = subsToFetch.map(sub => {
    return fetch(`https://www.reddit.com/r/${sub}.json`).then(res =>
      res.json()
    );
  });

  Promise.all(promises).then(fetchedPostFeeds => {
    subs.forEach((sub, index) => {
      setPostFeeds(postFeeds => ({
        ...postFeeds,
        [sub]: fetchedPostFeeds[index].data.children
      }));
    });
  });
}
