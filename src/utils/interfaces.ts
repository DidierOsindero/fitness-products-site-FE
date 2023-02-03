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

export interface IFitnessProduct {
  id: number;
  brand_name: string;
  device_type: string;
  model_name: string;
  color: string;
  selling_price: string;
  original_price: string;
  display: string;
  rating: number;
  strap_material: string;
  average_battery_life: string;
  reviews: string;
}
