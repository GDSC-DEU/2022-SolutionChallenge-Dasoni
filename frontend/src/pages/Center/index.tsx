import { Input } from "components/atoms/inputs/Input";
import Header from "components/organisms/Header";
import Map from "components/organisms/Map";
import * as React from "react";

import { CenterWrap, Search, MapWrap } from "./styles";

function Center() {
  return (
    <>
      <Header />
      <CenterWrap>
        <Search>
          <Input />
        </Search>
        <MapWrap>
          <Map positions={positions} searchRegion={searchRegion} />
        </MapWrap>
      </CenterWrap>
    </>
  );
}

export default Center;
