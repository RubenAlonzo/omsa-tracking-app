import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";
import useBusData from "../hooks/useBusData";

function CustomMap() {
  const busData = useBusData();
  const buses = busData[0]?.buses || [];
  
  return (
    <div className="absolute top-0 left-0 w-full min-h-[482px]">
      <APIProvider apiKey={""}>
        <Map
          mapId={"my_map"}
          style={{ width: "100%", height: "482px" }}
          defaultCenter={{ lat: 18.480996938618595, lng: -69.9148515636799 }}
          defaultZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
            {/* This is the busStop marker. TODO: Fix issue with the render cycles 
            <AdvancedMarker position={{ lat: busData.location.latitude, lng: busData.location.longitude }}>
              <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} />
            </AdvancedMarker> 
            */}


          {buses.map((bus) => (
            <AdvancedMarker position={{ lat: bus.location.latitude, lng: bus.location.longitude }}>
              <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}


export default CustomMap;