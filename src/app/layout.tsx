import "./globals.css"
import { ReactNode } from "react"
import { LoadingProvider } from "@/contexts/LoadingContext"

export const metadata = {
  title: "Gustavo Faria | Frontend Developer",
  description: "Portfolio with Next.js and Tailwind",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="bg-zinc-950 text-white" suppressHydrationWarning={true}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
