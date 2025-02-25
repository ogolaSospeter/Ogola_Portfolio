import dynamic from "next/dynamic";

const DisableRightClick = dynamic(() => import("@/components/DisableRightClick"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const FloatingContact = dynamic(() => import("@/components/FloatingContact"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
// import DisableRightClick from "@/components/DisableRightClick";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import FloatingContact from "@/components/FloatingContact";
// import ScrollToTop from "@/components/ScrollToTop";

// Configure fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Added 500 for better text scaling
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Added 500 for better text scaling
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Ogola Sospeter",
  description:
    "Welcome to Ogola Sospeter Portfolio. Full-Stack Web Developer and Android App Developer",
  keywords: [
    "Ogola Sospeter",
    "portfolio",
    "Ogola",
    "full stack dev",
    "personal portfolio",
    "lifecodes",
    "portfolio design",
    "portfolio website",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Include FontAwesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`
          ${poppins.variable} 
          ${nunito.variable} 
          bg-gray-100 
          text-gray-900
          min-h-screen
          flex
          flex-col
          overflow-x-hidden
          text-base
          md:text-lg
          selection:bg-blue-500/20
        `}
      >
        <DisableRightClick />
        <Navbar />
        <FloatingContact/>
        <ScrollToTop/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
