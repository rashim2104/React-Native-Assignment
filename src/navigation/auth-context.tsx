import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextValue {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value: AuthContextValue = {
    isAuthenticated,
    onLogin: () => setIsAuthenticated(true),
    onLogout: () => setIsAuthenticated(false),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
