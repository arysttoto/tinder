import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kinder',
  description: 'Kinder Moment',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-[-10] fixed h-screen w-full bg-gradient-to-br from-red-200 via-blue-200 to-yellow-200" />  
        {children} 
      </body>
    </html>
  )
}
// pages/index.js
