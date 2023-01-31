import "./MyOrderNav.scss";
import { NavLink } from "react-router-dom";

function AccountOrderNav() {
  return (
    <div className="order-process-nav row">
      <div className="order-process-nav-shipping col">
        <NavLink activeclassname="active" to="/my-order-shipping">
          Delivering
        </NavLink>
      </div>
      <div className="order-process-nav-ordered col">
        <NavLink activeclassname="active" to="/my-order-ordered">
          Delivered
        </NavLink>
      </div>
      <div className="order-process-nav-canceled col">
        <NavLink activeclassname="active" to="/my-order-canceled">
          Cancelled
        </NavLink>
      </div>
    </div>
  );
}

export default AccountOrderNav;
