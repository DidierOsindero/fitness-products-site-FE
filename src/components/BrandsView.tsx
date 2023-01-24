import { IBrandsView } from "../utils/interfaces";
import { SingleBrand } from "./SingleBrand";

export function BrandsView({ brandNames }: IBrandsView): JSX.Element {
  return (
    <div className="BrandsViewContainer">
      {brandNames.map((brand) => {
        return <SingleBrand brand={brand} key={brand.brand_name} />;
      })}
    </div>
  );
}
