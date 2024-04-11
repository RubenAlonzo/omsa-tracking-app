import NavigationBar from "../components/NavigationBar";
import useBusData from "../hooks/useBusData";
import NearbyBusList from "../components/NearbyBusList";
import { useState } from "react";

function Favorites() {
  const busData = useBusData(); // TODO: This data should be filtered by the backend
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const favoriteBusData = busData.filter((bus) => bus.isFavorite === true && bus.name.includes(searchValue));

  return (
    <div className="flex flex-col pt-20 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-6 w-full">
        {/* Search bar */}
        <div className="flex relative gap-5 justify-between px-2 py-2 text-sm font-light text-black bg-white rounded-lg shadow-sm">
          <input
            id="search-input"
            type="text"
            placeholder="Buscar Paradas"
            className="flex-auto outline-none"
            onChange={handleSearchChange}
          />
          <img
            id="search-button"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c208b79d74914c77584ed9afe3117b5a486345c631156e2fb2864957f72bcf8?apiKey=fb34ab8a011e440488e897e0309c7345&"
            alt="Search icon"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
        {/* Search bar */}
        <h2 className="mt-7 text-2xl font-bold text-black">
          Paradas Favoritas
        </h2>
        {favoriteBusData.map((data) => (
          <NearbyBusList busStops={data} busData={busData} />
        ))}
      </div>
      <NavigationBar />
    </div>
  );
}

export default Favorites;
