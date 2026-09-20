"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, passkey: string) => boolean;
  logout: () => void;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  showAdminPanel: boolean;
  setShowAdminPanel: (show: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// In production, these should be stored in environment variables
const ADMIN_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || "techdirector",
  passkey: process.env.NEXT_PUBLIC_ADMIN_PASSKEY || "nexus2026",
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const login = (username: string, passkey: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && passkey === ADMIN_CREDENTIALS.passkey) {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setShowAdminPanel(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setShowAdminPanel(false);
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        showLoginModal,
        setShowLoginModal,
        showAdminPanel,
        setShowAdminPanel,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}