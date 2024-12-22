import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
