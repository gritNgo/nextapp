import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Next App Homepage",
    template: "%s | Next App"
  },
  description: 'My Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar />  
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}

/* TODOS: 
* Make sidebar close on link click
* separate concerns of pages to put <metadata> but can't as they're "use client" components
*/