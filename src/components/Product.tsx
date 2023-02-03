import { IFitnessProduct } from "../utils/interfaces";
import { productImgDb } from "../utils/productImgDb";

interface IProductProps {
  product: IFitnessProduct;
}

export const Product = ({ product }: IProductProps): JSX.Element => {
  const randomIMG =
    productImgDb[Math.floor(Math.random() * productImgDb.length)];
  return (
    <div className="ctn-product">
      <img className="product-img" src={randomIMG} alt="smart watch" />
      <div className="ctn-product-description">
        <p className="product-model">{product.model_name}</p>
        <p className="product-brand">{product.brand_name}</p>
        <p className="product-selling-price">${product.selling_price}</p>
      </div>
      <button className="product-buy-btn">Buy</button>
    </div>
  );
};
