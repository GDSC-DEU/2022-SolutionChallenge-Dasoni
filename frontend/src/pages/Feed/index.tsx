import CheckBox from "components/atoms/inputs/CheckBox";
import CalloutBox from "components/molecules/boxes/CalloutBox";
import FeedContentBox from "components/molecules/boxes/FeedContentBox";
import PageNav from "components/organisms/navbars/PageNav";
import useFeedActions from "hooks/useFeedActions";
import * as React from "react";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { feedsAtoms, FeedTypes } from "recoil/Feed";

import { FeedWrap, SharedBox } from "./styles";

function Feed() {
  const feedActions = useFeedActions();
  const [feeds, setFeeds] = useRecoilState<FeedTypes[]>(feedsAtoms);
  const [today, setToday] = useState(new Date().toISOString());

  useEffect(() => {
    feedActions.getFeeds();
  }, []);

  return (
    <>
      <PageNav currentPage="Feed" />
      <FeedWrap>
        <CalloutBox>
          You can see others’ stories here. Express your empathy with the heart
          icon or replies.
        </CalloutBox>
        <SharedBox>
          <div className="title">
            <span>Shared Today</span>
            <CheckBox checkboxId="feed-show-mine-checkbox">
              Show my diaries
            </CheckBox>
          </div>
          {feeds.map((feed) => {
            console.log(feed.createdTime);
            if (feed.createdTime.split("T")[0] === today.split("T")[0]) {
              return <FeedContentBox key={feed.feedId} contents={feed} />;
            }
          })}
        </SharedBox>
        <SharedBox>
          <div className="title">
            <span>Shared In The Past</span>
          </div>
          {feeds.map((feed) => {
            console.log(feed.createdTime);
            if (feed.createdTime.split("T")[0] !== today.split("T")[0]) {
              return <FeedContentBox key={feed.feedId} contents={feed} />;
            }
          })}
        </SharedBox>
      </FeedWrap>
    </>
  );
}

export default Feed;
