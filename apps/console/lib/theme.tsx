"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useThemeMenuEnabled } from "./theme-menu";
import { isTheme, type Theme } from "./themes";

const STORAGE_KEY = "clinic-os-theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
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

function readSavedTheme(): string | null {
  const match = document.cookie.match(/(?:^|; )clinic-os-theme=([^;]*)/);
  if (match?.[1]) return decodeURIComponent(match[1]);
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export type { Theme };

export function ThemeProvider({ theme: initial, children }: { theme: Theme; children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initial);
  const menu = useThemeMenuEnabled();

  function setTheme(next: Theme) {
    const allowed = menu || next === "light" || next === "dark";
    const value = allowed && isTheme(next) ? next : "light";
    setThemeState(value);
    persistTheme(value);
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if (menu) {
      const saved = readSavedTheme();
      if (!isTheme(saved)) return;
      setThemeState(saved);
      document.documentElement.dataset.theme = saved;
      return;
    }
    setThemeState((current) => {
      const next = current === "dark" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      return next;
    });
  }, [menu]);

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
