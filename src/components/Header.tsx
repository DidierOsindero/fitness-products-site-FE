import { NavLink } from "react-router-dom";

export const Header = (): JSX.Element => {
  return (
    <div className="headerWrapper">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="brandnames">Brands</NavLink>
        <a>Products</a>
        <a>Sale</a>
      </nav>
    </div>
  );
};
