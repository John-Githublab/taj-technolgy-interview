import { Breadcrumb } from "antd";
import Text from "../../components/text/Text";
import Navigation from "../../layout/LeftDrawer";
import { useLocation } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";

type protectedType = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: protectedType) => {
  return (
    <div>
      <Navigation>{children}</Navigation>
    </div>
  );
};

export default ProtectedRoute;
