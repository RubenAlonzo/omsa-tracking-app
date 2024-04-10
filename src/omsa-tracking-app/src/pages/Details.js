import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import NearbyBusItem from "../components/NearbyBusItem";
import useBusData from "../hooks/useBusData";

function Details() {
  const busData = useBusData(); // TODO: Update or create new request/hook to filter busStop by the id that should be passed from main page.
  const busStops = busData[0] || [];

  return (
    <div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col justify-center py-px w-full bg-white rounded-[32px_32px_0px_0px]">
        <header className="px-5 pt-16 pb-6 w-full bg-yellow-300">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-1 text-2xl font-medium text-black whitespace-nowrap">

                <Link to="/Home">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b661cb3a38d070a369cfa0ac693b8b5e5d62abffae6ea64d9a860ffd5c5847?apiKey=fb34ab8a011e440488e897e0309c7345&"
                    alt="Location icon"
                    className="shrink-0 w-8 aspect-square"
                  />
                </Link>

                <div className="my-auto">{busStops.id}</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between text-base text-black">
                <div className="w-[258px]">
                  {busStops.name}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ec822bd0da8563635802778d05fb5bd132fe83ec2c274f332594cf66d08048?apiKey=fb34ab8a011e440488e897e0309c7345&"
                  alt="Arrow icon"
                  className="shrink-0 my-auto border border-solid aspect-[1.12] border-neutral-700 fill-neutral-700 stroke-[1px] stroke-neutral-700 w-[27px]"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-col px-8 pt-8 pb-20 w-full bg-stone-50 h-screen">
          {busStops.buses && busStops.buses.length > 0 ? (
            busStops.buses.map((bus, index) => (
              <NearbyBusItem key={index} {...bus} />
            ))
          ) : (
            <div>No Bus available</div>
          )}
        </main>
        <NavigationBar />
      </div>
    </div>
  );
}

export default Details;
