import React, { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

// Starting components
class Bus {
  constructor(id, currentPassengers, capacity, timeToArrival, location) {
    this.busNumber = `B${id}M`;
    this.passengers = currentPassengers;
    this.capacity = capacity;
    this.status =
      timeToArrival === "00:00:00" || timeToArrival.includes("-")
        ? "Vencida"
        : null;
    this.eta = `${timeToArrival} min`;
    this.location = location;
  }
}

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

function CustomMap() {
  const busData = useBusData();

  console.log("MAP");

  console.log(busData);

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
          {busData.map((bus) => (
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

const CustomMarker = ({ lat, lng }) => {
  return (
    <AdvancedMarker position={{ lat, lng }}>
      <Pin background={"green"} glyphColor={"yellow"} borderColor={"#000"} />
    </AdvancedMarker>
  );
};

function SearchButton() {
  return (
    <button className="flex relative gap-5 justify-between px-2 py-2 text-sm font-light text-black bg-white rounded-lg shadow-sm">
      <span className="my-auto">Buscar paradas</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c208b79d74914c77584ed9afe3117b5a486345c631156e2fb2864957f72bcf8?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Search icon"
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
}

function NearbyBusItem({ busNumber, passengers, capacity, status, eta }) {
  return (
    <div className="flex gap-5 justify-between p-3.5 mt-2 w-full text-xs text-black bg-white rounded-lg shadow-sm">
      <div className="flex gap-5 justify-between font-light">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a89fe64bae73ad8bd26f270b09df7ab002156809b3f1283cc0be076eda6c5111?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Bus icon"
          className="shrink-0 w-3.5 aspect-[0.74] fill-emerald-700"
        />
        <div className="my-auto">Bus {busNumber}</div>
      </div>
      <div className="flex gap-4 my-auto">
        <div className="flex gap-1.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13488abf6c0e29014fa651374db9513266294773e8aaad39b937f0da37ebe0b?apiKey=fb34ab8a011e440488e897e0309c7345&"
            alt="Passengers icon"
            className="shrink-0 w-4 aspect-[1.14] fill-zinc-600"
          />
          <div>
            {passengers} / {capacity}
          </div>
        </div>
        <div className="my-auto font-semibold">{status || eta}</div>
      </div>
    </div>
  );
}


function NearbyBusList() {
  const busData = useBusData();
  return (
    <div className="flex flex-col px-5 pt-3.5 pb-6 mt-4 w-full rounded-2xl bg-stone-50">
      <div className="flex gap-5 px-px text-black">
        <div className="flex flex-auto py-3 bg-yellow-300 rounded-lg">
          <div className="text-sm px-3 font-medium">43B</div>
          <div className="flex-auto text-xs">
            Av. 27 de Febrero Proximo Av. Maximo Gomez
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9ea635c4b25e7e77c5b6bbbf859ca8bbf8f1357cac6222e52b6f8e58a41021?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Arrow icon"
          className="shrink-0 my-auto aspect-[0.94] w-[18px]"
        />
      </div>
      {busData && busData.length > 0 ? (
        busData.map((bus, index) => <NearbyBusItem key={index} {...bus} />)
      ) : (
        <div>No Bus available</div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col px-8 py-16 w-full min-h-[482px]">
        <SearchButton />
        <CustomMap />
        <div className="flex relative gap-5 justify-between items-start self-end mt-8 mr-11 max-w-full w-[139px]"></div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/562f4e759dd9bcd9b99fe471ce0234660808cba6c84b6a0483c66ad23b59c47f?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Location pin"
          className="self-center mt-40 mb-1.5 aspect-square w-[35px]"
        />
      </div>
      <div className="flex z-10 flex-col pt-2.5 pb-px mt-0 w-full bg-white shadow-sm rounded-[32px_32px_0px_0px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebaae9c02358e1005fb1673b68100e841156ea5b8c9d88fafcb3c32a5570022?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Logo"
          className="self-center aspect-[2.38] w-[71px]"
        />
        <div className="flex flex-col px-5 mt-1 w-full">
          <h2 className="self-start ml-4 text-2xl font-medium text-stone-900">
            Autobuses Cercanos
          </h2>
          <NearbyBusList />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37bc4f9946a4bdaee227264f41c8c2cbae651d3d52c062497d7528f0a8618707?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Footer"
        className="mt-3 w-full shadow-sm aspect-[6.67]"
      />
    </div>
  );
}

// Finishing components

export default App;
