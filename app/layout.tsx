import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./components/ToastProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "health{hacks}",
  description: "Assembling the future innovators of medicine.",
  icons: {
    icon: "/icon.JPEG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
