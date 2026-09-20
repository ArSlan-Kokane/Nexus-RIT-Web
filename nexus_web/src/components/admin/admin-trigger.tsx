"use client";

import { useEffect, useState } from "react";

interface AdminTriggerProps {
  onTrigger: () => void;
}

export function AdminTrigger({ onTrigger }: AdminTriggerProps) {
  const [keySequence, setKeySequence] = useState<string>("");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Secret sequence: type "nexus" then press Enter
      const newSequence = keySequence + event.key.toLowerCase();
      
      // Check if Enter was pressed and the previous sequence was "nexus"
      if (event.key === "Enter" && keySequence === "nexus") {
        event.preventDefault();
        onTrigger();
        setKeySequence("");
      } else {
        // Keep last 10 characters to avoid infinite growth
        setKeySequence(newSequence.slice(-10));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [keySequence, onTrigger]);

  return null; // This component doesn't render anything
}