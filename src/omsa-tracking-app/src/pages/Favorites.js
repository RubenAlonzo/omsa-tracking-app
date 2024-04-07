const busData = [
  {
    id: "43B",
    name: "Av. 27 de Febrero Proximo Av. Maximo Gomez",
    buses: [
      {
        id: "B340M",
        capacity: "84 / 220",
        status: "Vencida",
      },
      {
        id: "B347G",
        capacity: "68 / 140",
        eta: "6 min.",
      },
      {
        id: "C240M",
        capacity: "140 / 140",
        eta: "18 min.",
      },
    ],
  },
  {
    id: "44A",
    name: "Av. Kennedy Con Av. Maximo Gomez",
    buses: [
      {
        id: "B340M",
        capacity: "84 / 220",
        status: "Vencida",
      },
      {
        id: "B347G",
        capacity: "68 / 140",
        eta: "6 min.",
      },
      {
        id: "C240M",
        capacity: "140 / 140",
        eta: "18 min.",
      },
    ],
  },
];


function SearchBar() {
  return (
    <div className="flex gap-5 justify-between self-center px-2 py-2 w-full text-sm font-light text-black bg-white rounded-lg shadow-sm max-w-[363px]">
      <div className="my-auto">Buscar paradas</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb450f8a6a3d32245eb90c735422b1dc1d42b18b375c4c45c9a27d41c4919913?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Search icon"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
  );
}

function BusStopHeader({ id, name }) {
  return (
    <div className="flex gap-5 px-px text-black">
      <div className="flex flex-auto gap-3 py-3 bg-yellow-300 rounded-lg">
        <div className="text-sm font-medium">{id}</div>
        <div className="flex-auto text-xs">{name}</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9ea635c4b25e7e77c5b6bbbf859ca8bbf8f1357cac6222e52b6f8e58a41021?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Bus stop icon"
        className="shrink-0 my-auto aspect-[0.94] w-[18px]"
      />
    </div>
  );
}

function BusInfo({ id, capacity, status, eta }) {
  return (
    <div className="flex gap-5 justify-between px-4 py-3.5 mt-2 w-full bg-white rounded-lg shadow-sm">
      <div className="flex gap-5 justify-between text-xs font-light text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dc19db778ed26628ad255fa63e9ae5518b41564d5e7b516c05e5fd8022b00ce?apiKey=fb34ab8a011e440488e897e0309c7345&"
          alt="Bus icon"
          className="shrink-0 w-3.5 aspect-[0.74] fill-emerald-700"
        />
        <div className="my-auto">Bus {id}</div>
      </div>
      <div className="flex gap-5 justify-between my-auto">
        <div className="flex gap-1.5">
          <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-[1.14] fill-zinc-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13488abf6c0e29014fa651374db9513266294773e8aaad39b937f0da37ebe0b?apiKey=fb34ab8a011e440488e897e0309c7345&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13488abf6c0e29014fa651374db9513266294773e8aaad39b937f0da37ebe0b?apiKey=fb34ab8a011e440488e897e0309c7345&"
              alt="Capacity icon"
              className="w-full aspect-[1.14] fill-zinc-600"
            />
          </div>
          <div className="text-xs text-black">{capacity}</div>
        </div>
        <div
          className={`my-auto text-xs font-semibold ${status ? "text-red-500" : "text-black"
            }`}
        >
          {status || eta}
        </div>
      </div>
    </div>
  );
}

function BusStop({ data }) {
  return (
    <section className="flex flex-col px-5 pt-3.5 pb-6 mt-8 w-full rounded-2xl bg-stone-50">
      <BusStopHeader id={data.id} name={data.name} />
      {data.buses.map((bus) => (
        <BusInfo
          key={bus.id}
          id={bus.id}
          capacity={bus.capacity}
          status={bus.status}
          eta={bus.eta}
        />
      ))}
    </section>
  );
}

function Favorites() {
  return (
    <div className="flex flex-col pt-20 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-6 w-full">
        <SearchBar />
        <h2 className="mt-7 text-2xl font-bold text-black">
          Paradas Favoritas
        </h2>
        {busData.map((data) => (
          <BusStop key={data.id} data={data} />
        ))}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/062c21ae95407c2b67bbeb13cb74d3b45703ac31ef27c690907c753541407bc1?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Map"
        className="mt-44 w-full shadow-sm aspect-[6.67]"
      />
    </div>
  );
}

export default Favorites;