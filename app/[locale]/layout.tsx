import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/app/i18n/routing";
import ScrollToTopBtn from "../components/buttons/ScrollToTopBtn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;


  // Alle Messages für den Client-Provider laden
  const messages = await getMessages();

  return (
    <html
      lang={locale} // <-- Direkte Nutzung der Variable statt await locale()
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {/* 3. messages an den Provider übergeben */}
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTopBtn />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}