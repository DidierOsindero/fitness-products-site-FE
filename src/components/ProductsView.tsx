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

  const { INSERT_BRAND_NAME_HERE } = useParams();

  const getAllBrandProducts = async () => {
    const { data } = await axios.get(
      baseURL + "/brand" + "products" + INSERT_BRAND_NAME_HERE
    );
    setAllBrandProducts(data);
  };

  useEffect(() => {
    getAllBrandProducts();
  }, []);

  return (
    <div className="ctn-products-view">
      <h1>Products</h1>
      <div className="ctn-products-view">
        {allBrandProducts.map((product) => {
          <Product product={product} />;
        })}
      </div>
    </div>
  );
};
