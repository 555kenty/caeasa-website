import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CAEASA - Centre d'Appui à l'Entrepreneuriat Agricole",
  description: "Accompagnement des entrepreneurs agricoles au Burkina Faso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body className="font-sans antialiased bg-cream text-ink">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
