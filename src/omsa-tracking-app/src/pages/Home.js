import CustomMap from "../components/CustomMap";
import NearbyBusList from "../components/NearbyBusList";
import React, {useState, useRef, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import useBusData from "../hooks/useBusData";

function Home() {
  const busData = useBusData();
  const [busStopValue, setbusStopValue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    setInputValue(searchValue);
    const matchingBusStop = busData.find(busStop => busStop.name === searchValue);
    console.log(matchingBusStop);
    if (matchingBusStop) {
      setbusStopValue(matchingBusStop);
    }else{
      setbusStopValue(busData[0] || []);
    }
  };

  useEffect(() => {
    if (busStopValue.length == 0 && busData.length > 0) {
      setbusStopValue(busData[0] || []);
    }
  }, [busData]);

  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col px-8 py-16 w-full min-h-[482px]">
        <CustomMap busData={busData} busStop={busStopValue} />
        {/* Search bar */}
        <div className="flex relative gap-5 justify-between px-2 py-2 text-sm font-light text-black bg-white rounded-lg shadow-sm">
          <input
            id="search-input"
            type="text"
            placeholder="Buscar Paradas"
            className="flex-auto outline-none"
            ref={inputRef}
          />
          <img 
            id="search-button"
            onClick={handleSearch}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c208b79d74914c77584ed9afe3117b5a486345c631156e2fb2864957f72bcf8?apiKey=fb34ab8a011e440488e897e0309c7345&"
            alt="Search icon"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
        {/* Search bar */}

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
          <NearbyBusList busStops={busStopValue} busData={busData} />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Home;
