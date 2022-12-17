import { ReactNode } from "react"
import NavBar from "."
import { Footer } from "."

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}
