import React from 'react';
import { Link } from 'react-router-dom';
import NearbyBusItem from "./NearbyBusItem";
import BusItemArrow from "../components/icons/bus-item-arrow";

function NearbyBusList({ busStops, busData }) {
  busStops = busData.find(b => b.id === busStops.id) || busStops;

  return (
    <div className="flex flex-col px-5 pt-3.5 pb-6 mt-4 w-full rounded-2xl bg-stone-100">
      <div className="flex gap-5 px-px text-black">
        <div className="flex flex-auto py-3 bg-yellow-300 rounded-lg">
          <div className="text-sm px-3 font-medium">{busStops.id}</div>
          <div className="flex-auto text-xs">
            {busStops.name} 
          </div>
        </div>
        <Link to={`/details?id=${busStops.id}`}>
          <BusItemArrow />
        </Link>
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