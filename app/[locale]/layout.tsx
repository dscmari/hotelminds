import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar/Navbar";
import { dictionary } from "../utils/dictionary";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { locale } from "next/root-params";
import { notFound } from "next/navigation";
import { routing } from "@/app/i18n/routing";
import { getTranslations } from "next-intl/server";

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

// export const metadata: Metadata = {
//   metadataBase: new URL("https://hotelminds.io"),
// };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = await getTranslations("components.navbar");
  const bullets = navbar.raw("bullets") as string[];

  return (
    <html
      lang={await locale()}
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider>
          <Navbar data={bullets} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
