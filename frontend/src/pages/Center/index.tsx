import * as React from "react";
import { useEffect, useState } from "react";

import { Input } from "components/atoms/inputs/Input";
import Header from "components/organisms/Header";
import Map from "components/organisms/Map";
import useCenterActions from "hooks/useCenterActions";

import indicator from "assets/icons/indicator.png";

import { CenterWrap, Search, MapWrap, CenterListWrap } from "./styles";
import { centersAtoms, CenterTypes } from "recoil/Center";
import { useRecoilState } from "recoil";
import CenterContentBox from "components/molecules/boxes/CenterContentBox";

function Center() {
  const centerActions = useCenterActions();
  const [centers, setCenters] = useRecoilState<CenterTypes[]>(centersAtoms);
  const [searchRegion, setSearchRegion] = useState("Seoul");
  const [show, setShow] = useState(false);
  const positions = centers.map((center) => ({
    lat: center.latitude,
    lng: center.longitude,
  }));

  useEffect(() => {
    centerActions.getCenters();
  }, []);

  return (
    <>
      <Header />
      <CenterWrap>
        <Search>
          <Input
            type="text"
            value={searchRegion}
            onChange={(e) => setSearchRegion(e.target.value)}
            placeholder="Find a center for single parent"
          />
        </Search>
        <MapWrap>
          <Map positions={positions} searchRegion={searchRegion} />
        </MapWrap>
        <CenterListWrap
          show={show}
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="title">
            <img src={indicator} />
            <span>Click to Show List</span>
          </div>
          <div className="list-wrap">
            {centers.map((center, index) => (
              <CenterContentBox key={index} information={center} />
            ))}
          </div>
        </CenterListWrap>
      </CenterWrap>
    </>
  );
}

export default Center;
