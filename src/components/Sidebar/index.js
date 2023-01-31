import { useEffect } from "react";
import "./sidebar.scss";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest, clear } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === true) {
      toast.success("Logout success");
      dispatch(clear());
      navigate("/");
    }
  }, [status]);
  const handleLogout = () => {
    dispatch(logoutRequest());
  };
  let activeStyle = {
    color: "#61C67A",
    fontWeight: "bold",
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }} className="uitlogo">
          <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
          {/* <img src="/images/footer/UITBooks.com.png" alt="UIT" /> */}
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {/* <p className="title">QUẢN LÝ ADMIN</p> */}
          <NavLink
            to="/admin-user-list"
            // style={{ textDecoration: "none" }}
            // style={({ isActive }) => [isActive ? activeStyle : undefined]}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <AccessibilityIcon className="icon" />
              {/* Users */}
              <span>Users</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-category-list"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <CategoryIcon className="icon" />
              <span> Product Category</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-book-list"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <InventoryIcon className="icon" />
              <span> Products</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-order"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <LocalMallIcon className="icon" />
              <span> Orders</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-blog-list"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <RateReviewIcon className="icon" />
              <span> Blogs</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-statistic"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <AnalyticsIcon className="icon" />
              <span> Statistics</span>
            </div>
          </NavLink>
          <div onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span> Log Out</span>
          </div>
        </ul>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Sidebar;
