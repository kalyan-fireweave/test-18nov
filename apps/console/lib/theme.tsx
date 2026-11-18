"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "clinic-os-theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function persistTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* private mode */
  }
  document.cookie = `${STORAGE_KEY}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function ThemeProvider({ theme: initial, children }: { theme: Theme; children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initial);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    persistTheme(next);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
