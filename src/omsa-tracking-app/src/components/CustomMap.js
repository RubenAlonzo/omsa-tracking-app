import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";
import useBusData from "../hooks/useBusData";

function CustomMap({busData}) {
  // const busData = useBusData();
  const mainBuses = busData[0]?.buses || [];
  const otherBuses1 = busData[1]?.buses || [];
  const otherBuses2 = busData[2]?.buses || [];
  const otherBuses3 = busData[3]?.buses || [];
  const otherBuses4 = busData[4]?.buses || [];
  
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
            {/* {busData !== undefined && busData !==  null && busData  ?  (
              <AdvancedMarker position={{ lat: busData[0].location.latitude, lng: busData[0].location.longitude }}>
                <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} />
              </AdvancedMarker>
            ) : null} */}


            {busData.map((busGroup) => 
              (busGroup?.buses || []).map((bus) => (
                <AdvancedMarker position={{ lat: bus.location.latitude, lng: bus.location.longitude }}>
                  <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} glyph={bus.busNumber} />
                </AdvancedMarker>
              ))
            )}


        </Map>
      </APIProvider>
    </div>
  );
}


export default CustomMap;