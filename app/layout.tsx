import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google'
import Header from "./components/Header";
import "./globals.css";




const bebas = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',  // only weight available
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "What to Watch",
  description: "Find your next obsession",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${bebas.className}`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
