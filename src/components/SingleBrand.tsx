import { Link } from "react-router-dom";
import { IBrandNames } from "../utils/interfaces";

export function SingleBrand({ brand }: { brand: IBrandNames }): JSX.Element {
  return (
    <div className="singleBrandContainer">
      {/* link to brands/:brand_name/products */}
      <Link to={`/brands/${brand.brand_name}/products`}>
        <h3>{brand.brand_name}</h3>
        <img src="/" alt={brand.brand_name} />
      </Link>
    </div>
  );
}
