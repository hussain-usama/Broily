import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description:
    "Broily is a verified, invite-only social space for men. No fake engagement, no distractions, just real conversations and meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7FF58" />
       {/*  <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FZJBDNFE28"
        />
        <Script id="viewport-meta" strategy="beforeInteractive">
          {`
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
    document.head.appendChild(meta);
  `}
        </Script>

        <Script id="theme-color" strategy="beforeInteractive">
          {`
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#F7FF58';
    document.head.appendChild(meta);
  `}
        </Script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F7FF58] pt-[env(safe-area-inset-top)] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
