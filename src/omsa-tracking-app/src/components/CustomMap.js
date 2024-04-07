import {
  APIProvider,
  Map
} from "@vis.gl/react-google-maps";
import useBusData from "../hooks/useBusData";
import CustomMarker from "./CustomMarker";

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
          {buses.map((bus) => (
            <CustomMarker
              lat={bus.location.latitude}
              lng={bus.location.longitude}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}


export default CustomMap;