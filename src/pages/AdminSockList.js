import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookListComponent from "../components/Admin/AdminBook/AdminSockList/AdminSockList";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminBookList() {
  return (
    <ProtectedRoute isAdmin={true}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminBookListComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
