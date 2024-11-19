import {ReactNode} from "react"
import {Metadata} from "next"

export const metadata: Metadata = {
    title: "FastAPI | Аунтефикация",
    description: "FastAPI - децентрализованный файлообменник-мессенджер"
}

export default function AuthLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <main>
            {children}
        </main>
    )
}
