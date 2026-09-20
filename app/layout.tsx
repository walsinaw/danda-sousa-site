import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dândala Sousa | Psicóloga",
  description:
    "Psicoterapia online e presencial com Dândala Sousa. Um espaço para você se escutar, compreender suas emoções e se relacionar melhor consigo e com o mundo.",
  icons: {
    icon: "/images/logonavegador.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
