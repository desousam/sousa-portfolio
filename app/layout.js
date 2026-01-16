import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - MSousa",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
