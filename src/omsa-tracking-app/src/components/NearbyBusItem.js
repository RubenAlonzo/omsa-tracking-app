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

export default NearbyBusItem;