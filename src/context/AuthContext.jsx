import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  const login = (username, password) => {
    if (password !== "test123") {
      return { ok: false, message: "Invalid password (use test123)" };
    }

    const mockToken = "mock-jwt-token-" + Date.now();
    localStorage.setItem("token", mockToken);
    localStorage.setItem("user", username);
    setToken(mockToken);
    setUser(username);

    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  // keep state in sync if localStorage changes in another tab
  useEffect(() => {
    const onStorage = () => {
      setToken(localStorage.getItem("token"));
      setUser(localStorage.getItem("user"));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
