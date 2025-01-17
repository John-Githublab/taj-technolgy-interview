import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../layout/LeftDrawer";
import ConfigApiUrl from "../../config/ConfigApiUrl";
import { AuthContext } from "../../provider/Auth";
import { useContext } from "react";
import TopBar from "../../layout/TopBar";

type protectedType = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: protectedType) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isUserRole = context?.role?.toLowerCase() === "user";

  if (!context?.isAuthenticated) {
    navigate(ConfigApiUrl.routerurls.login);
  }
  if (isUserRole) {
    // user has only access to some page other than that page will be redirected
    if (!ConfigApiUrl.userRoleRoutes?.includes(location?.pathname)) {
      navigate(ConfigApiUrl.routerurls.userProfile);
    }
  }
  return (
    <div>
      <Navigation>{children}</Navigation>
    </div>
  );
};

export default ProtectedRoute;
