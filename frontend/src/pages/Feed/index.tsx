import CheckBox from "components/atoms/inputs/CheckBox";
import CalloutBox from "components/molecules/boxes/CalloutBox";
import FeedContentBox from "components/molecules/boxes/FeedContentBox";
import PageNav from "components/organisms/navbars/PageNav";
import useFeedActions from "hooks/useFeedActions";
import * as React from "react";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { feedsAtoms, FeedTypes } from "recoil/Feed";

import { FeedWrap, TodaySharedBox } from "./styles";

function Feed() {
  const feedActions = useFeedActions();
  const [feeds, setFeeds] = useRecoilState<FeedTypes[]>(feedsAtoms);

  useEffect(() => {
    feedActions.getFeeds();
  }, []);

  return (
    <>
      <PageNav currentPage="Feed" />
      <FeedWrap>
        <CalloutBox>
          You can see others’ stories here. Express your sympathy with the heart
          icon or replies.
        </CalloutBox>
        <TodaySharedBox>
          <div className="title">
            <span>Shared Today</span>
            <CheckBox checkboxId="feed-show-mine-checkbox">
              Show my diaries
            </CheckBox>
          </div>
          {feeds.map((feed) => (
            <FeedContentBox key={feed.feedId} contents={feed} />
          ))}
        </TodaySharedBox>
      </FeedWrap>
    </>
  );
}

export default Feed;
