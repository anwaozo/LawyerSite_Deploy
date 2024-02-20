import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossorigin
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
          crossorigin
        />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
