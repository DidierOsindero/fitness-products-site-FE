import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseURL } from "../App";
import { IFitnessProduct } from "../interfaces";
import { Product } from "./Product";

export const Home = (): JSX.Element => {
  const [saleProductsArr, setSaleProductsArr] = useState<IFitnessProduct[]>([]);

  const getSaleProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(baseURL + "/products/sale");
      setSaleProductsArr(data);
    } catch (error) {
      console.error(error);
    }
  }, [setSaleProductsArr]);

  useEffect(() => {
    getSaleProducts();
  }, [getSaleProducts]);

  if (saleProductsArr.length < 1) {
    return (
      <div className="ctn-home">
        <div className="home-hero">
          <h1 className="home-hero-txt">Smart Fitness</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ctn-home">
        <div className="home-hero">
          <h1 className="home-hero-txt">Smart Fitness</h1>
        </div>
        <div className="ctn-home-tagline">
          <p className="home-tagline-txt">
            Upgrade to intelligent fitness with our selection of smartwatches
          </p>
        </div>
        <div className="sale-products-block">
          <Product product={saleProductsArr[0]} />
          <Product product={saleProductsArr[1]} />
        </div>
      </div>
    );
  }
};
