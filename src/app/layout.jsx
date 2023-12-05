import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

export const metadata = {
  title: 'SISPEN',
  description: 'Sistem Informasi Semester Pendek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
