"use client";

import { AdminProvider } from "@/contexts/admin-context";
import { AdminWrapper } from "./admin-wrapper";

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminWrapper>
        {children}
      </AdminWrapper>
    </AdminProvider>
  );
}