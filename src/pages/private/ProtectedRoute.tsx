import { useNavigate } from "react-router-dom";
import Navigation from "../../layout/LeftDrawer";
import ConfigApiUrl from "../../config/ConfigApiUrl";
import { AuthContext } from "../../provider/Auth";
import { useContext } from "react";

type protectedType = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: protectedType) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context?.isAuthenticated) {
    navigate(ConfigApiUrl.routerurls.login);
  }
  return (
    <div>
      <Navigation>{children}</Navigation>
    </div>
  );
};

export default ProtectedRoute;
