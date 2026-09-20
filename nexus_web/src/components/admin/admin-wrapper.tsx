"use client";

import { AdminTrigger } from "./admin-trigger";
import { AdminLoginModal } from "./admin-login-modal";
import { AdminPanel } from "./admin-panel";
import { useAdmin } from "@/contexts/admin-context";
import { useState } from "react";

export function AdminWrapper({ children }: { children: React.ReactNode }) {
  const { showLoginModal, setShowLoginModal, showAdminPanel, setShowAdminPanel, login, logout } = useAdmin();
  const [loginError, setLoginError] = useState<string>();

  const handleLogin = (username: string, passkey: string) => {
    const success = login(username, passkey);
    if (!success) {
      setLoginError("Invalid username or passkey");
    } else {
      setLoginError(undefined);
    }
  };

  const handleTrigger = () => {
    setShowLoginModal(true);
  };

  const handleClosePanel = () => {
    logout();
  };

  return (
    <>
      <AdminTrigger onTrigger={handleTrigger} />
      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setLoginError(undefined);
        }}
        onLogin={handleLogin}
        error={loginError}
      />
      <AdminPanel
        isOpen={showAdminPanel}
        onClose={handleClosePanel}
      />
      {children}
    </>
  );
}