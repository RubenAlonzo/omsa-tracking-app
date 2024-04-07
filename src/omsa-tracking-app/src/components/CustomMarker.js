import {
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const CustomMarker = ({ lat, lng }) => {
  return (
    <AdvancedMarker position={{ lat, lng }}>
      <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} />
    </AdvancedMarker>
  );
};

export default CustomMarker;