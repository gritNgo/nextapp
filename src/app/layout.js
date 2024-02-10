import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
<link rel="icon" href="/favicon.ico" sizes="any" />;



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Fiorenso Wattalage Fernando",
    template: "%s | Portfolio",
  },
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
            <Image
              src="/stars.jpg"
              fill={true}
              style={{ opacity: 0.5, zIndex: -1 }}
              alt="Background image"    
              priority          
            />
            <Navbar />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}

/* TODOS:
 * Make sidebar close on link click
 * Separate concerns of pages to put <metadata> but can't as they're "use client" components
 * Add "Are you sure?" when deleting posts as user/admin
 * Password can take duplicates in DB
 * Add gap between posts & add new post in admin panel
 * Fix error "Failed to parse src "img" on `next/image`"
 * Add my favicon
 */
