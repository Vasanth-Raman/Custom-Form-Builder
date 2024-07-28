import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const initialUser = JSON.parse(window.localStorage.getItem("user") || "null");
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  useEffect(() => {
    const userPresent = window.localStorage.getItem("user");

    if (userPresent) {
      setUser(JSON.parse(userPresent));
    }
  }, []);

  const loginContext = (userDetails) => {
    setUser(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    navigate("/dashboard");
  };

  const logoutContext = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const values = { user, loginContext, logoutContext };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
