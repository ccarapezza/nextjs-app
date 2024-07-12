import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"

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
            <nav>
                <ul className="flex gap-8 mx-4 text-bold">
                    <li className="hover:text-blue-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link href="/nasa-images">NASA Images</Link>
                    </li>
                </ul>
            </nav>
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
