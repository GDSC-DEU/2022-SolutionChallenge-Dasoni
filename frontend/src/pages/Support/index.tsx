import SuppportContentBox from "components/molecules/boxes/SuppportContentBox";
import ToggleBox from "components/molecules/boxes/ToggleBox";
import * as React from "react";
import { Title, ListWrap } from "./styles";

function Support() {
  return (
    <>
      <Title>Welfare Assistance</Title>
      <ListWrap>
        <div className="filter">
          <ToggleBox />
        </div>
        <div className="list">
          <SuppportContentBox />
          <SuppportContentBox />
          <SuppportContentBox />
        </div>
      </ListWrap>
    </>
  );
}

export default Support;
