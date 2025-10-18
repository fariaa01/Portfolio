import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Gustavo Faria | Full Stack Developer",
  description: "Portfolio with Next.js and Tailwind",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="bg-zinc-950 text-white" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
