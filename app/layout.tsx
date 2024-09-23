import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Chito | Portfolio",
  description:
    "Innovative Full Stack Developer with a passion for crafting engaging digital experiences, specializing in React and the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-br from-gray-50 to-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:from-gray-900 dark:to-gray-800 dark:text-gray-50 dark:text-opacity-90`}
        >

        <div className="bg-[#97d9e1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#868f96]"></div>

        <div className="bg-[#e4efe9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#596164]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-left" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
