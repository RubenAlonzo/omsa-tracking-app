function SearchBar() {
  return (
    <div className="flex relative gap-5 justify-between px-2 py-2 text-sm font-light text-black bg-white rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Buscar Paradas"
        className="flex-auto outline-none"
      />
      <img
        onClick={() => {console.log("Search button clicked")}}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c208b79d74914c77584ed9afe3117b5a486345c631156e2fb2864957f72bcf8?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Search icon"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
  );
}

export default SearchBar;