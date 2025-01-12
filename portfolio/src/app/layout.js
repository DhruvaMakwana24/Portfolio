import { Inter ,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-Serif",
  subsets: ["latin"],
  weight: ['400','700']
});
export const metadata = {
  title: "Portfolio",
  description: "about Dhruva Makwana",
  icons:{
    icon:'icons/visualstudio.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
      
      
    </html>
    
  );
}
