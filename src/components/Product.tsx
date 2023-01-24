import { IFitnessProduct } from "../interfaces";

interface IProductProps {
  product: IFitnessProduct;
}
export const Product = ({ product }: IProductProps): JSX.Element => {
  return (
    <div className="ctn-product">
      <img
        className="product-img"
        src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      />
      <div className="ctn-product-description">
        <p className="product-model">{product.model_name}</p>
        <p className="product-brand">{product.brand_name}</p>
        <p className="product-selling-price">{product.selling_price}</p>
      </div>
      <button>Buy</button>
    </div>
  );
};
