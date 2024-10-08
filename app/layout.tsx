import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Playfair_Display, Lato } from 'next/font/google';
import theme from './theme';

export const metadata: Metadata = {
  title: "am-tm-wedding",
  description: "Generated by create next app",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navigation />
            <main>{children}</main>
            <footer></footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html >
  );
}
