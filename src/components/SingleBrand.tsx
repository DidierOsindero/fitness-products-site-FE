import { IBrandNames } from "../utils/interfaces";

export function SingleBrand({ brand }: { brand: IBrandNames }): JSX.Element {
  return (
    <div className="singleBrandContainer">
      <h3>{brand.brand_name}</h3>
      <img src="/" alt={brand.brand_name} />
    </div>
  );
}
