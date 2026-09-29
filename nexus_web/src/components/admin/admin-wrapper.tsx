"use client";

import { AdminTrigger } from "./admin-trigger";
import { AdminLoginModal } from "./admin-login-modal";
import { AdminPanel } from "./admin-panel";
import { useAdmin } from "@/contexts/admin-context";
import { useState, useEffect } from "react";

export function AdminWrapper({ children }: { children: React.ReactNode }) {
  const { showLoginModal, setShowLoginModal, showAdminPanel, setShowAdminPanel, login, logout } = useAdmin();
  const [loginError, setLoginError] = useState<string>();

  // Check for admin trigger via URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      console.log("Admin trigger via URL parameter");
      setShowLoginModal(true);
    }
  }, [setShowLoginModal]);

  const handleLogin = (username: string, passkey: string) => {
    console.log("Login attempt with username:", username);
    const success = login(username, passkey);
    if (!success) {
      setLoginError("Invalid username or passkey");
    } else {
      setLoginError(undefined);
    }
  };

  const handleTrigger = () => {
    console.log("Admin trigger handler called");
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