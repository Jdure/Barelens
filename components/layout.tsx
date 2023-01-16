import { ReactNode } from "react"
import dynamic from "next/dynamic"

type LayoutProps = {
    children: ReactNode
}

const NavBar = dynamic(() => import("./NavBar"), {
    ssr: false,
})

const Footer = dynamic(
    () => import("./Footer").then((module) => module.Footer),
    {
        ssr: false,
    }
)

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <main className="min-h-min">{children}</main>
            <Footer />
        </>
    )
}
