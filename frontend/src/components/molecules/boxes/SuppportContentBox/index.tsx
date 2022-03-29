import * as React from "react";
import { useState } from "react";

import { SuppportContentBoxWrap, Summary, Details } from "./styles";

import financial from "assets/icons/financial.svg";
import housing from "assets/icons/housing.svg";
import medical_care from "assets/icons/medical-care.svg";
import heart_filled from "assets/icons/heart-filled.png";
import heart_unfilled from "assets/icons/heart-unfilled.png";
import sponsor from "assets/icons/sponsor.png";
import period from "assets/icons/period.png";
import eligibility from "assets/icons/eligibility.png";
import details from "assets/icons/details.png";
import chevron_up from "assets/icons/chevron-up.png";
import chevron_down from "assets/icons/chevron-down.png";
import { SupportTypes } from "recoil/Support";

function SuppportContentBox(props: { support: SupportTypes }) {
  const {
    title,
    startDate,
    finishDate,
    boardCategory,
    organizer,
    content,
    link,
  } = props.support;

  const [bookmarked, setBookmarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuppportContentBoxWrap>
      <div className="bookmark" onClick={() => setBookmarked(!bookmarked)}>
        <img src={bookmarked ? heart_filled : heart_unfilled} />
      </div>
      <details open={isOpen}>
        <Summary>
          <div className="thumbnail">
            <img src={financial} />
          </div>

          <div className="content">
            <div className="title">{title}</div>
            <div className="date">
              {startDate} - {finishDate}
            </div>
            <div>
              <div className="tags">
                <span className="tag">{boardCategory}</span>
              </div>
            </div>
          </div>
        </Summary>
        <div className="bookmark" onClick={() => setBookmarked(!bookmarked)}>
          <img src={bookmarked ? heart_filled : heart_unfilled} />
        </div>
        <Details>
          <img
            className="chevron"
            onClick={() => setIsOpen(!isOpen)}
            src={chevron_up}
          />
          <p>
            <div className="title">
              <img src={sponsor} />
              <span>Sponsor</span>
            </div>
            <div className="content">{organizer}</div>
          </p>
          <p>
            <div className="title">
              <img src={period} />
              <span>Period</span>
            </div>
            <div className="content">
              {startDate} - {finishDate}
            </div>
          </p>
          <p>
            <div className="title">
              <img src={eligibility} />
              <span>Eligibility</span>
            </div>
            <div className="content">Unmarried mother</div>
          </p>
          <p>
            <div className="title">
              <img src={details} />
              <span>Details</span>
            </div>
            <div className="content">{content}</div>
          </p>
          <a href={link}>
            <button>Go go the website</button>
          </a>
        </Details>
      </details>
    </SuppportContentBoxWrap>
  );
}

export default SuppportContentBox;
