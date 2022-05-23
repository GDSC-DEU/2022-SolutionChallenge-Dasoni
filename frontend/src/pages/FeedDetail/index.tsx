import CheckBox from "components/atoms/inputs/CheckBox";
import CalloutBox from "components/molecules/boxes/CalloutBox";
import FeedContentBox from "components/molecules/boxes/FeedContentBox";
import BackNav from "components/organisms/navbars/BackNav";
import * as React from "react";

import { FeedDetailWrap, FeedDetailContent } from "./styles";

function FeedDetail() {
  return (
    <>
      <BackNav type="detailmenu" />
      <FeedDetailWrap>
        <FeedDetailContent>
          <div>
            <img src={} />
            <span>Aliquam quis turpis eget elit sodales scelerisque.</span>
          </div>
          <div>
            The key to every great design is the organization of its
            information. Spacing methods and layout grids define structure,
            hierarchy, and rhythm in your design. When correctly used, they
            reduce decision making and help establish a rational approach to
            type scales, positioning, sizing and spacing.
          </div>
          <div>
            <img src={} />
            <span>3</span>
            <img src={} />
            <span>3</span>
            <img src={} />
            <span>3</span>
          </div>
        </FeedDetailContent>
      </FeedDetailWrap>
    </>
  );
}

export default FeedDetail;
