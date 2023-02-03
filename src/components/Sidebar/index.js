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
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="uitlogo ms-1 d-none d-sm-inline"
        >
          <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
          {/* <img src="/images/footer/UITBooks.com.png" alt="UIT" /> */}
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {/* <p className="title">QUẢN LÝ ADMIN</p> */}
          {/* <NavLink
            to="/admin-user-list"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <AccessibilityIcon className="icon" />

              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                Users
              </span>
            </div>
          </NavLink> */}
          <NavLink
            to="/admin-user-list"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <AccessibilityIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                Users
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-category-list"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <CategoryIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                Category
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-book-list"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <InventoryIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                {" "}
                Products
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-order"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <LocalMallIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                {" "}
                Orders
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-blog-list"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <RateReviewIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                {" "}
                Blogs
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-statistic"
            className={"nav-link align-middle px-0"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#000",
              ...(isActive ? activeStyle : null),
            })}
          >
            <div>
              <AnalyticsIcon className="icon" />
              <span className="responsive-sidebar ms-1 d-none d-sm-inline">
                {" "}
                Statistics
              </span>
            </div>
          </NavLink>
          <div onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span className="responsive-sidebar ms-1 d-none d-sm-inline">
              {" "}
              Log Out
            </span>
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
