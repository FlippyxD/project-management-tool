import type { Metadata } from "next";
import type { ReactElement } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project management tool",
  description: "Manage your projects and tasks.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
