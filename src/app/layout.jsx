import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  // weight: []
})

export const metadata = {
  title: 'SISPEN',
  description: 'Sistem Informasi Semester Pendek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
