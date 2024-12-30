import { useContext } from "react";
import AuthContext from "./context";
import AuthStorage from "./storage";
import { jwtDecode } from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  const logIn = (authToken) => {
    setUser(jwtDecode(authToken));
    AuthStorage.storeToken(authToken);
  };

  return { logIn, logout, user };
};
