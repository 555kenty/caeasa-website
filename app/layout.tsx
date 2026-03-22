import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAEASA - Centre d'Appui à l'Entrepreneuriat Agricole",
  description: "Accompagnement des entrepreneurs agricoles au Burkina Faso. Formation, financement et accès aux marchés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased bg-cream">
        {children}
      </body>
    </html>
  );
}
