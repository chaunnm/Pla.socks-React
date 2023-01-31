import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import ProtectedRoute from "../routes/PrivateRoute";

//Đây là layout cho trang Quản lí
export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <Sidebar />
          </div>
          <div class="col py-3">
            <div style={{ flex: "4" }}>
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
