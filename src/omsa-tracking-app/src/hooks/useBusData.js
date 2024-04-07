import { useState, useEffect } from "react";
import Bus from "../models/Bus";

function useBusData() {
  const [busData, setBusData] = useState([]);
  useEffect(() => {
    const fetchBusData = () => {
      fetch("http://localhost:5073/api/BusTracking?busStopId=123")
        .then((response) => response.json())
        .then((data) => {
          const buses = data.payload.map(
            (bus) =>
              new Bus(
                bus.id,
                bus.currentPassengers,
                bus.capacity,
                bus.timeToArrival,
                {
                  latitude: bus.location.latitude,
                  longitude: bus.location.longitude,
                }
              )
          );
          setBusData(buses);
        })
        .catch((error) => {
          console.error("Error fetching bus data:", error);
          setBusData([]);
        });
    };

    fetchBusData();
    const intervalId = setInterval(fetchBusData, 1000); // Fetch every 1 second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return busData;
}

export default useBusData;