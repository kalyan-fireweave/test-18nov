"use client";

import type { ReactNode } from "react";
import { CountsProvider } from "../lib/counts";
import { ThemeProvider, type Theme } from "../lib/theme";
import { TickProvider } from "../lib/tick";
import { ToastProvider } from "./Toast";

export function Providers({ theme, children }: { theme: Theme; children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <TickProvider>
        <ToastProvider>
          <CountsProvider>{children}</CountsProvider>
        </ToastProvider>
      </TickProvider>
    </ThemeProvider>
  );
}
