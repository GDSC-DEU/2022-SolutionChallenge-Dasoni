import * as React from "react";
import { useEffect, useState } from "react";

import { Input } from "components/atoms/inputs/Input";
import Header from "components/organisms/Header";
import Map from "components/organisms/Map";
import * as React from "react";

import { CenterWrap, Search, MapWrap } from "./styles";

function Center() {
  const [searchRegion, setSearchRegion] = useState("Seoul");
  const positions = centers.map((center) => ({
    lat: center.latitude,
    lng: center.longitude,
  }));
  return (
    <>
      <Header />
      <CenterWrap>
        <Search>
          <Input
            type="text"
            value={searchRegion}
            onChange={(e) => setSearchRegion(e.target.value)}
            placeholder="Find a facility for single parent"
          />
        </Search>
        <MapWrap>
          <Map positions={positions} searchRegion={searchRegion} />
        </MapWrap>
      </CenterWrap>
    </>
  );
}

export default Center;
