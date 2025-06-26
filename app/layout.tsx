import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AOSProvider from "@/components/aos-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OutSource Pro Limited - Excellence. Efficiency. Expertise.",
  description: "Your trusted partner for comprehensive business solutions in Nigeria",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  )
}
