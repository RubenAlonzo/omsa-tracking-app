import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import SVGComponent from "./pinbusmark";
import { useState, useEffect, createRef, useMemo } from "react";

function CustomMap({busData, busStop}) {

  const buses = useMemo(() => busData[0]?.buses || [], [busData]);
  const [markerRefs, setMarkerRefs] = useState([]);
  const [infoWindowShown, setInfoWindowShown] = useState(null);

  useEffect(() => {
    setMarkerRefs((refs) => Array(buses.length).fill().map((_, i) => refs[i] || createRef()));
  }, [buses]);


  return (
    <div className="absolute top-0 left-0 w-full min-h-[482px]">
      <APIProvider apiKey={""}>
        <Map
          mapId={"my_map"}
          style={{ width: "100%", height: "482px" }}
          defaultCenter={{ lat: 18.480996938618595, lng: -69.9148515636799 }}
          defaultZoom={14}
          defaultZoom={15}
          gestureHandling={"greedy"}
          options={{ disableDefaultUI: true }}
        >
          {busData && busData.length > 0 && busData.find(b => b.id === busStop.id) && (
            <AdvancedMarker position={{ lat: busStop.location.latitude, lng: busStop.location.longitude }}>
              <Pin background={"red"} glyphColor={"white"} borderColor={"#000"} />
            </AdvancedMarker>
          )}
          
          {buses.map((bus, index) => (
            <AdvancedMarker ref={markerRefs[index]} onClick={() => setInfoWindowShown(index)} position={{ lat: bus.location.latitude, lng: bus.location.longitude }}>
              <SVGComponent style={{ width: '36px', height: '36px', fill: 'yellow' }} />
              {infoWindowShown === index && (
                <InfoWindow anchor={markerRefs[index].current} onCloseClick={() => setInfoWindowShown(null)}>
                  {bus.busNumber}
                </InfoWindow>
              )}
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
export default CustomMap;