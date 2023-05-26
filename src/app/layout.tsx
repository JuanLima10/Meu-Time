import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

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
        {children}
      </body>
    </html>
  )
}
