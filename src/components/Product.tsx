import { IFitnessProduct } from "../interfaces";

interface IProductProps {
  product: IFitnessProduct;
}
export const Product = ({ product }: IProductProps): JSX.Element => {
  return (
    <div className="ctn-product">
      <p className="product-model">{product.model_name}</p>
      <p className="product-brand">{product.brand_name}</p>
      <p className="product-selling-price">{product.selling_price}</p>
    </div>
  );
};
