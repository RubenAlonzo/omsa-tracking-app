import React from "react";
import CustomMap from "./components/CustomMap";
import SearchBar from "./components/SearchBar";
import NearbyBusList from "./components/NearbyBusList";
// Starting components








function App() {
  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col px-8 py-16 w-full min-h-[482px]">
        <CustomMap />
        <SearchBar />
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
