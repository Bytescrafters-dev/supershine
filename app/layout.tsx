import type { Metadata } from "next";
import { Inter, Kaushan_Script, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import FacebookPixel from "@/components/config/meta-pixel";

const inter = Inter({ subsets: ["latin"] });
const kaushanScript = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kaushan",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Super Shine",
  description: "Website developed for Super Shine car detailing company",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/web-app-manifest-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Handjet:wght@400;600;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <body
        className={`${inter.className} ${kaushanScript.variable} ${josefinSans.variable} bg-[#040402] overflow-y-scroll overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <FacebookPixel />
      </body>
    </html>
  );
}
