import { useContext } from "react";
import { Navigate } from "react-router-dom";
import DescriptionPage from "layouts/pages/landing-pages/description";
import { AuthenticateContexte } from "./AuthContext";

const Protectedroutes = () => {
  const { authInfo } = useContext(AuthenticateContexte);
  return authInfo.isAuthenticated ? <DescriptionPage /> : <Navigate to="/" />;
};

export default Protectedroutes;
