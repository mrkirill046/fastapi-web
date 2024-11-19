import {Nunito} from "next/font/google"
import "./globals.css"
import "@/styles/index.css"
import {ReactNode} from "react"
import {Metadata} from "next"

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
    robots: "index, follow",
    authors: [{name: "Kazuha"}, {name: "raskolnin"}, {name: "bjfssd757"}, {name: "mestartura"}],
    openGraph: {
        title: "FastAPI | Децентрализованный файлообменник-мессенджер",
        description: "FastAPI - децентрализованный файлообменник-мессенджер",
        url: "http://localhost:3000",
        type: "website",
        siteName: "FastAPI | Официальный сайт",
        images: ""
    },
    twitter: {
        title: "FastAPI | Децентрализованный файлообменник-мессенджер",
        description: "FastAPI - децентрализованный файлообменник-мессенджер",
        images: "",
        card: "summary_large_image"
    }
}

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
            <body className={nunito.className}>
                {children}
            </body>
        </html>
    )
}
