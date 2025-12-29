import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { role, name }

  const loginAdmin = (id, password) => {
    if (id === "admin" && password === "1234") {
      setUser({ role: "admin", name: "Admin" });
      return true;
    }
    return false;
  };

  const loginCustomer = (name, phone) => {
    setUser({ role: "customer", name, phone });
  };
   
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginAdmin, loginCustomer, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
