import { Home } from "./Home";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { IBrandNames } from "../utils/interfaces";
import { BrandsView } from "./BrandsView";


export const MainContent = (): JSX.Element => {
  const [brandNames, setBrandNames] = useState<IBrandNames[]>([]);

  const getAllBrandNames = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://fitness-products-site-be.onrender.com/brands/name"
      );
      setBrandNames(response.data);
    } catch (error) {
      window.alert("Failed to fetch brand names");
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllBrandNames();
  }, [getAllBrandNames]);

  return (
    <div className="mainContentWrapper">
      <Home />
      <p>Main Content</p>
      <BrandsView brandNames={brandNames} />
    </div>
  );
};
