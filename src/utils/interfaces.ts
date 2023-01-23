export interface ISearchBar {
  searchInput: string;
  handleSeachInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IBrandNames {
  brand_name: string;
}

export interface IBrandsView {
  brandNames: IBrandNames[];
}
