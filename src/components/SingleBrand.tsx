import { Link } from "react-router-dom";
import { brandImages } from "../utils/brandImages";
import { IBrandNames } from "../utils/interfaces";

export function SingleBrand({
  brand,
  index,
}: {
  brand: IBrandNames;
  index: number;
}): JSX.Element {
  return (
    <div className="singleBrandContainer">
      {/* link to brands/:brand_name/products */}
      <Link to={`/brands/${brand.brand_name}/products`}>
        <h3>{brand.brand_name}</h3>
        <img src={brandImages[index].image_url} alt={brand.brand_name} />
      </Link>
    </div>
  );
}
