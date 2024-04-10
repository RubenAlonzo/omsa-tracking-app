import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";

function CustomMap({busData}) {
  
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
            {// TODO: Move location based on searched bus stop
              busData && busData.length > 0 ? (
                <AdvancedMarker position={{ lat: busData[0].location.latitude, lng: busData[0].location.longitude }}>
                  <Pin background={"red"} glyphColor={"white"} borderColor={"#000"} />
                </AdvancedMarker>
              ) : null
            }


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