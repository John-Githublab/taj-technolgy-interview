import Navigation from "../../layout/LeftDrawer";

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
