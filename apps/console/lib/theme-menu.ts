"use client";

import { fw } from "@fireweaveai/web-sdk/start";
import { useSyncExternalStore } from "react";

export function themeMenuEnabled(): boolean {
  // @fireweave-controlpoint theme-menu
  return fw.controlPoints.getBooleanValue("theme-menu", false);
}

export function useThemeMenuEnabled(): boolean {
  return useSyncExternalStore(
    (onChange) => fw.subscribe(() => onChange()),
    themeMenuEnabled,
    () => false,
  );
}
