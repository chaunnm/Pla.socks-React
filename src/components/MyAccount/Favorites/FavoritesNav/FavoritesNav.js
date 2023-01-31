import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./FavoritesNav.scss";

function AccountFavoritesNav() {
  let { favouriteItems } = useSelector((state) => state.favourite);

  return (
    <div className="favorites-nav row">
      <div className="col favorites-nav-product">
        <NavLink
          to="/my-favorite-book"
          activeclassname="active"
          className="col"
        >
          Products ({favouriteItems.length})
        </NavLink>
      </div>
      <div className="col favorites-nav-post">
        <NavLink
          to="/my-favorite-post"
          activeclassname="active"
          className="col"
          // style={{ pointerEvents: "none", opacity: "0.5" }}
        >
          Blogs (0)
        </NavLink>
      </div>
    </div>
  );
}

export default AccountFavoritesNav;
