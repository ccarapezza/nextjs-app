import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Borderless - Next App",
  description: "Applicación de ejemplo de Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center p-4 bg-slate-300 border">
            <h1>{metadata.title}</h1>
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
            />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
