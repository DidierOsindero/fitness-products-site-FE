import { ISearchBar } from "../utils/interfaces";

export function SearchBar({
  searchInput,
  handleSeachInput,
}: ISearchBar): JSX.Element {
  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchBar"
        value={searchInput}
        onChange={(e) => {
          handleSeachInput(e);
        }}
      />
    </div>
  );
}
