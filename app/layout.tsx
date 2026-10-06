import type { Metadata, Viewport } from "next"
import { Literata, Manrope } from "next/font/google"
import "./globals.css"
import "./v8mr.css"

const _literata = Literata({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-literata",
  display: "swap",
})

const _manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
})

const title = "Monro Casino — официальный сайт, зеркало и как играть онлайн без лишней суматохи"
const description =
  "Monro Casino официальный сайт и рабочее зеркало: как отличить страницу бренда от копии, зайти с телефона и начать игру без лишних шагов. Свой адрес сохраните сразу, чужие ссылки из чата не открывайте."

export const metadata: Metadata = {
  metadataBase: new URL("https://monro1casino.vercel.app"),
  title,
  description,
  applicationName: "Monro Casino",
  authors: [{ name: "Monro Casino" }],
  alternates: {
    canonical: "https://monro1casino.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title,
    description,
    url: "https://monro1casino.vercel.app/",
    siteName: "Monro Casino",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/monro-table.jpg",
        width: 880,
        height: 657,
        alt: "Карточный стол Monro Casino под латунной лампой",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/monro-table.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10262c",
  colorScheme: "dark",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${_literata.variable} ${_manrope.variable} bg-background`}>
      <head>
        {/* Слот для дополнительных пользовательских тегов */}
      </head>
      <body className="v8mr-body antialiased">{children}</body>
    </html>
  )
}
