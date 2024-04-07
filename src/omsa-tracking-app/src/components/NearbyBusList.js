import NearbyBusItem from "./NearbyBusItem";

function NearbyBusList({busStops}) {

  return (
    <div className="flex flex-col px-5 pt-3.5 pb-6 mt-4 w-full rounded-2xl bg-stone-50">
      <div className="flex gap-5 px-px text-black">
        <div className="flex flex-auto py-3 bg-yellow-300 rounded-lg">
          <div className="text-sm px-3 font-medium">{busStops.id}</div>
          <div className="flex-auto text-xs">
            {busStops.name}
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9ea635c4b25e7e77c5b6bbbf859ca8bbf8f1357cac6222e52b6f8e58a41021?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Arrow icon"
          className="shrink-0 my-auto aspect-[0.94] w-[18px]"
        />
      </div>
      {busStops.buses && busStops.buses.length > 0 ? (
        busStops.buses.map((bus, index) => <NearbyBusItem key={index} {...bus} />)
      ) : (
        <div>No Bus available</div>
      )}
    </div>
  );
}

export default NearbyBusList;