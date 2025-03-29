import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Next.js Script
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Broily – A Social Space That Puts You First",
  description: "Broily is a verified, invite-only social space for men. No fake engagement, no distractions, just real conversations and meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FZJBDNFE28" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FZJBDNFE28');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F7FF58] `}>
        {children}
      </body>
    </html>
  );
}
