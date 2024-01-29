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
* Separate concerns of pages to put <metadata> but can't as they're "use client" components
* Add "Are you sure?" when deleting posts as user/admin
* Password can take duplicates in DB
* Add gap between posts & add new post in admin panel
* Fix error "Failed to parse src "img" on `next/image`"
*/