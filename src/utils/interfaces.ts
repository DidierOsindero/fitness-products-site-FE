export interface ISearchBar {
  searchInput: string;
  handleSeachInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
