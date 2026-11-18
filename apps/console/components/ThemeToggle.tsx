"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme";
import { IconButton } from "./Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <IconButton
      variant="ghost"
      size="sm"
      className="theme-toggle"
      aria-pressed={dark}
      aria-label="Dark theme"
      onClick={toggleTheme}
    >
      {dark ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
    </IconButton>
  );
}
