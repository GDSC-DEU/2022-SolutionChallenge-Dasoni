import * as React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { GOOGLEMAPAPIKEY } from "secret";

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface MapProps {
  positions: { lat: number; lng: number }[];
  searchRegion?: string;
}

function Map(props: MapProps) {
  const { positions, searchRegion } = props;
  const [center, setCenter] = useState(positions[0]);

  React.useEffect(() => {
    if (searchRegion === "Seoul") {
      setCenter({
        lat: 37.566535,
        lng: 126.9779692,
      });
    }
  }, [searchRegion]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLEMAPAPIKEY, // ,
    // ...otherOptions
  });
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {positions.map((position, index) => (
        <Marker key={index} position={position} />
      ))}
    </GoogleMap>
  ) : (
    <div>Map cannot be loaded right now, sorry.</div>
  );
}

export default Map;
