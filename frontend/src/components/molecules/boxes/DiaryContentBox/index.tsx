import * as React from "react";

import { ShadowBoxWrap } from "../ShadowBox/styles";

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
    <ShadowBoxWrap key={key}>
      <DiaryContentBoxWrap>
        <div>
          <div className="mood-icon"></div>
          <div className="date">12 Sat</div>
          {/* <div>{created_date}</div> */}
        </div>
        <div>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </div>
      </DiaryContentBoxWrap>
    </ShadowBoxWrap>
  );
}

export default DiaryContentBox;
