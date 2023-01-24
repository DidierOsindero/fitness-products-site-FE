import { IFitnessProduct } from "../interfaces";

interface IFeaturedProductProps {
  product: IFitnessProduct;
}
export const FeaturedProduct = ({
  product,
}: IFeaturedProductProps): JSX.Element => {
  return (
    <div className="ctn-featured-product">
      <img
        className="featured-product-img"
        src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      />
      <div className="ctn-product-description">
        <p className="featured-product-model">{product.model_name}</p>
        <p className="featured-product-brand">{product.brand_name}</p>
        <p className="featured-product-selling-price">
          {product.selling_price}
        </p>
      </div>
    </div>
  );
};
