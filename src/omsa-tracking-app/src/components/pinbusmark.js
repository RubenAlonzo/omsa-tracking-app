import * as React from "react";
import bus from "../assets/omsa.svg";

const SVGComponent = (props) => (
    <img src={bus} alt="Mi SVG" {...props} />
);

export default SVGComponent;