import SearchBox from "./SearchBox";

function Header({ searchText, setSearchText }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">Posh Properties</h1>
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
    </header>
  );
}

export default Header;
