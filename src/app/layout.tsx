import type { Metadata } from "next";
import { Archivo, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { ProvedorTema } from "@/components/layout/ProvedorTema";
import "./globals.css";

const fonteDisplay = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const fonteCorpo = DM_Sans({
  variable: "--font-corpo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fonteMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nova Roda | Software para lojas de veículos",
  description:
    "Site institucional e painel operacional para lojas controlarem pátio, estoque, leads, propostas e valor parado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fonteDisplay.variable} ${fonteCorpo.variable} ${fonteMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-fundo text-texto">
        <ProvedorTema />
        {children}
      </body>
    </html>
  );
}
