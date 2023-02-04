import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import Image from "next/image"
import { useRouter } from "next/router"

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const currRoute = useRouter().pathname
    const listStyle =
        "text-sm text-gray-300  sm:text-2xl py-2 hover:text-gray-800"
    const activeLinkStyle = "text-gray-800  sm:text-2xl py-2"
    const mobileListStyle = "w-full hover:bg-gray-100"

    const menuRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    const handleClickOutside = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsNavOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [])

    return (
        <>
            <div className="flex flex-row py-2 px-2">
                <Image
                    src="/images/Black logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-24 sm:w-36 sm:mx-4"
                />
                {/* Mobile Menu Icon */}
                <div
                    ref={menuRef}
                    className="w-3/4 flex py-2 justify-end sm:hidden"
                >
                    {isNavOpen ? (
                        <MdClose
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <MdMenu
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    )}
                </div>
                {/* Desktop Menu */}
                <div className="hidden sm:items-center sm:w-3/4 sm:flex sm:flex-row sm:justify-evenly">
                    <Link
                        className={
                            currRoute === "/" ? activeLinkStyle : listStyle
                        }
                        href={"/"}
                    >
                        Home
                    </Link>
                    <Link
                        className={
                            currRoute === "/about" ? activeLinkStyle : listStyle
                        }
                        href={"/about"}
                    >
                        About
                    </Link>
                    <Link
                        className={
                            currRoute === "/services"
                                ? activeLinkStyle
                                : listStyle
                        }
                        href={"/services"}
                    >
                        Services
                    </Link>
                    <Link
                        className={
                            currRoute === "/contact"
                                ? activeLinkStyle
                                : listStyle
                        }
                        href={"/contact"}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            {/* Mobile Links  */}
            <div
                className={`text-base bg-gray-50 px-3 overflow-hidden transition-all ease-out duration-150 sm:hidden sm:transition-none ${
                    isNavOpen ? "h-32" : "h-0"
                }`}
            >
                <nav
                    className={`flex flex-col text-right space-y-2 duration-300 ease-out sm:hidden sm:transition-none`}
                >
                    <Link className={mobileListStyle} href={"/"}>
                        Home
                    </Link>

                    <Link className={mobileListStyle} href={"/about"}>
                        About
                    </Link>

                    <Link className={mobileListStyle} href={"/services"}>
                        Services
                    </Link>
                    <Link className={mobileListStyle} href={"/contact"}>
                        Contact
                    </Link>
                </nav>
            </div>
        </>
    )
}
