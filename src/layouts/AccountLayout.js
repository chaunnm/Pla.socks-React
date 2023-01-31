import AccountNav from "../components/MyAccount/AccountNav/AccountNav";
import MainLayout from "./index";
// import ProtectedRoute from "../routes/PrivateRoute";
export default function AccountLayout({ children }) {
  return (
    // <ProtectedRoute>
    <MainLayout>
      <div className="container my-account" style={{ marginTop: 30 }}>
        <div className="row">
          <AccountNav />
          {children}
        </div>
      </div>
    </MainLayout>
    // </ProtectedRoute>
  );
}
