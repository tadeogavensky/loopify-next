"use client"

import "./globals.css";
import "../styles/extra.css";
import "../styles/swiperStyles.css";

import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });


const clientId =
  "394954289615-hgk85f9ul09op4flt4evf7ngpdaomb8a.apps.googleusercontent.com";

export default function RootLayout({ children }) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <html lang="en">
        <head><title>Loopify</title></head>
        <body className={inter.className}>
          <Navigation />
          <main id="home" className=""> {children}</main>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
