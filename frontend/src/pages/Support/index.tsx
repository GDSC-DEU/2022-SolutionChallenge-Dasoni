import SuppportContentBox from "components/molecules/boxes/SuppportContentBox";
import ToggleBox from "components/molecules/boxes/ToggleBox";
import * as React from "react";
import { useState, useEffect } from "react";
import { Title, ListWrap } from "./styles";

import useSupportActions from "hooks/useSupportActions";
import { supportsAtom, SupportTypes } from "recoil/Support";
import { useRecoilState } from "recoil";

function Support() {
  const supportActions = useSupportActions();
  const [supports, setSupports] = useRecoilState<SupportTypes[]>(supportsAtom);

  const [category, setCategory] = useState("All");
  const size = 10;

  useEffect(() => {
    supportActions.getSupports(size);
  }, []);

  return (
    <>
      <Title>Social Services Organizations </Title>
      <ListWrap>
        <div className="filter">
          <ToggleBox />
        </div>
        <div className="list">
          {supports.map((support) => (
            <SuppportContentBox key={support.boardId} support={support} />
          ))}
        </div>
      </ListWrap>
    </>
  );
}

export default Support;
