import type { Metadata } from "next";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fonteDisplay = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fonteCorpo = Source_Sans_3({
  variable: "--font-corpo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AutoGestor Pro | Site institucional para lojas de veículos",
  description:
    "Site institucional e sistema demonstrativo para lojistas organizarem carros, motos, estoque, clientes e oportunidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fonteDisplay.variable} ${fonteCorpo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-fundo text-texto">{children}</body>
    </html>
  );
}
