import {ReactNode} from "react"
import {Metadata} from "next"
import {Header} from "@/components/shared/header"

export const metadata: Metadata = {
    title: "FastAPI | Главная",
    description: "FastAPI - децентрализованный файлообменник-мессенджер"
}

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header/>

            <main>
                {children}
            </main>
        </>
    )
}
