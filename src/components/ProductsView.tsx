import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../App";
import { IFitnessProduct } from "../utils/interfaces";
import { Product } from "./Product";

export const ProductsView = (): JSX.Element => {
  const [allBrandProducts, setAllBrandProducts] = useState<IFitnessProduct[]>(
    []
  );

  const { brand_name } = useParams();

  useEffect(() => {
    const getAllBrandProducts = async () => {
      const { data } = await axios.get(
        `${baseURL}/brand/products/${brand_name}`
      );
      setAllBrandProducts(data);
    };
    getAllBrandProducts();
  }, [brand_name]);

  return (
    <div className="ctn-products-view">
      <h1>Products - {brand_name}</h1>
      <div className="ctn-products">
        {allBrandProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
