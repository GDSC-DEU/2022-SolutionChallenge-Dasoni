import CheckBox from "components/atoms/inputs/CheckBox";
import CalloutBox from "components/molecules/boxes/CalloutBox";
import FeedContentBox from "components/molecules/boxes/FeedContentBox";
import PageNav from "components/organisms/navbars/PageNav";
import * as React from "react";

import { FeedWrap, TodaySharedBox } from "./styles";

function Feed() {
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
          <FeedContentBox />
          <FeedContentBox />
          <FeedContentBox />
        </TodaySharedBox>
      </FeedWrap>
    </>
  );
}

export default Feed;
