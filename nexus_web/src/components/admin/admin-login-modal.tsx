"use client";

import { useState } from "react";
import { X, Lock, User, Shield } from "lucide-react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, passkey: string) => void;
  error?: string;
}

export function AdminLoginModal({ isOpen, onClose, onLogin, error }: AdminLoginModalProps) {
  const [username, setUsername] = useState("");
  const [passkey, setPasskey] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, passkey);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <Shield className="text-[#4f9eff]" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Admin Access</h2>
            <p className="text-sm text-gray-400">Tech Director Control Panel</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4f9eff] transition-colors"
                placeholder="Enter username"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Passkey
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4f9eff] transition-colors"
                placeholder="Enter passkey"
                autoComplete="off"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4f9eff] hover:bg-[#3a8aee] text-white font-medium py-3 rounded-lg transition-colors"
          >
            Access Admin Panel
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Unauthorized access attempts are logged and monitored.
        </p>
      </div>
    </div>
  );
}