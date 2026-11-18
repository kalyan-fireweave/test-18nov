export const THEMES = [
  { id: "light", label: "Light" },
  { id: "slate", label: "Slate" },
  { id: "sand", label: "Sand" },
  { id: "dark", label: "Dark" },
  { id: "harbor", label: "Harbor" },
] as const;

export type Theme = (typeof THEMES)[number]["id"];

export function isTheme(value: string | undefined | null): value is Theme {
  return THEMES.some((item) => item.id === value);
}

/** The document starts on light or dark. Other palettes apply only after the theme menu is on. */
export function themeForDocument(saved: string | undefined): Theme {
  return saved === "dark" ? "dark" : "light";
}
