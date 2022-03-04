import * as React from "react";

import { DiaryContentBoxWrap } from "./styles";

export interface DiaryContentBoxProps {
  key: string;
  created_date: string;
  title: string;
  content: string;
}

function DiaryContentBox(props: DiaryContentBoxProps) {
  const { key, created_date, title, content } = props;

  return (
    <DiaryContentBoxWrap key={key}>
      <div className="left">
        <div className="warning-signer"></div>
        <div className="mood-icon"></div>
        <div className="date">12 Sat</div>
        {/* <div>{created_date}</div> */}
      </div>
      <div className="center">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="right">
        <div className="menu-button"></div>
        <div className="warning-button"></div>
      </div>
    </DiaryContentBoxWrap>
  );
}

export default DiaryContentBox;
