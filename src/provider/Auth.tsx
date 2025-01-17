import { createContext, useEffect, useMemo } from "react";
import { useJwt } from "react-jwt";
import { useLocation, useNavigate } from "react-router-dom";
import ConfigApiUrl from "../config/ConfigApiUrl";
import LocalStorage from "../utils/LocalStorage";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = LocalStorage.get("token") || "";
  // checks token and expired
  const { decodedToken, isExpired } = useJwt(token);

  // Determine if the user is authenticated
  const isAuthenticated = useMemo(
    () => !!decodedToken && !isExpired,
    [decodedToken, isExpired]
  );

  // Handle redirection based on token status

  const authRoutes = () => {
    return ["/login", "/register"]?.some((value: string) =>
      location?.pathname?.endsWith(value)
    );
  };

  const redirectUser = () => {
    // redirect the user if user is not authenticated
    if (isExpired) {
      return navigate(ConfigApiUrl.routerurls.login);
    }
    // if user is authenticated fallback to a private route
    if (authRoutes()) {
      if (decodedToken?.role === "user") {
        return navigate(ConfigApiUrl.routerurls.userProfile);
      }
      return navigate(ConfigApiUrl.routerurls.user);
    }
  };
  useEffect(() => {
    redirectUser();
  }, [isExpired, isAuthenticated, location?.pathname]);

  // Memoize the context value
  const authValue = useMemo(
    () => ({ ...decodedToken, isExpired, isAuthenticated }),
    [decodedToken, isExpired, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
