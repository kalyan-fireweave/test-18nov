import "@clinic/ui/console.css";
import "./globals.css";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { Providers } from "../components/Providers";
import { themeForDocument } from "../lib/themes";

export const metadata = { title: "Clinic OS" };

export default async function RootLayout({ children }: { children: ReactNode }) {
  const saved = (await cookies()).get("clinic-os-theme")?.value;
  const theme = themeForDocument(saved);
  return (
    <html lang="en" data-theme={theme}>
      <body>
        <Providers theme={theme}>{children}</Providers>
      </body>
    </html>
  );
}
