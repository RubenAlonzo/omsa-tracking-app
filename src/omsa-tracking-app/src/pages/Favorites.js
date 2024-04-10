import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import useBusData from "../hooks/useBusData";
import NearbyBusList from "../components/NearbyBusList";

function Favorites() {
  const busData = useBusData(); // TODO: This data should be filtered by the backend

  const favoriteBusData = busData.filter(bus => bus.isFavorite === true);

  return (
    <div className="flex flex-col pt-20 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-6 w-full">
        <SearchBar />
        <h2 className="mt-7 text-2xl font-bold text-black">
          Paradas Favoritas
        </h2>
        {favoriteBusData.map((data) => (
          <NearbyBusList busStops={data} />
        ))}
      </div>
      <NavigationBar />
    </div>
  );
}

export default Favorites;