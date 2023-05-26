import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

import '../styles/global.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: {
    default: 'Meu Time',
    template: '%s | Meu Time',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
