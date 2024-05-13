import { Metadata } from "next"

export const metadata: Metadata= {
  title: 'Orhcard - Landing Page Test',
  description: 'This is a page made using NextJs.  So cool... really...',
  keywords: 'Orchard, Landing Page, Techincal Exam, Filta, Calvin Coderes'
}
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
