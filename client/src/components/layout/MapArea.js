import React, { useState } from "react";
import MapMarkers from "../modules/MapMarkers";
import MapRoutes from "../modules/MapRoute";
import "../../styles/components/layout/MapArea.css";
import Button from "../modules/Button";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapArea(props) {
  const [activeMarker, setActiveMarker] = useState(null);

  const mapStyles = {
    height: "100%",
    width: "100%",
  };
  const defaultCenter = {
    lat: props.userLocation.lat,
    lng: props.userLocation.lng,
  };

  const clearState = function () {
    props.setIsActive(false);
    props.setLocations([]);
    props.setDestination({});
    props.setUserLocation({});
  };

  return (
    <div className="map_area">
      {props.locations.length > 1 && (
        <h2 className="map_title">Select a bathroom to route</h2>
      )}
      {props.locations.length > 0 && (
          <div className="map">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={activeMarker ? null : defaultCenter}
            >
              {props.userLocation["lat"] && (
                <MapMarkers
                  userLocation={props.userLocation}
                  locations={props.locations}
                  setLocations={props.setLocations}
                  destination={props.destination}
                  setDestination={props.setDestination}
                  activeMarker={activeMarker}
                  setActiveMarker={setActiveMarker}
                />
              )}
              {props.destination["name"] && (
                <MapRoutes
                  user={props.userLocation}
                  destination={props.destination}
                />
              )}
            </GoogleMap>
            <Button title="Reset" onClick={clearState} />
          </div>
      )}
    </div>
  );
}
