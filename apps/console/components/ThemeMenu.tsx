"use client";

import { useTheme } from "../lib/theme";
import { THEMES, type Theme } from "../lib/themes";

export function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="theme-menu" htmlFor="clinic-os-theme">
      Theme
      <select
        id="clinic-os-theme"
        value={theme}
        onChange={(event) => setTheme(event.target.value as Theme)}
      >
        {THEMES.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
