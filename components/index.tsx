import Link from "next/link"
import React from "react"

export default function NavBar() {
    const listStyle = "py-2 px-4 hover:underline"

    return (
        <div className="flex flex-row py-2">
            <i className="flex-grow py-2 px-4">Bare Lens Logo</i>
            <div className="flex flex-row gap-20">
                <Link className={listStyle} href={"/"}>
                    Home
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    About
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    Gallery
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export function Banner() {
    return (
        <div className="flex flex-col pt-28 divide-y">
            <h1 className="text-center pb-4 text-9xl">BARE LENS</h1>
            <div className="flex flex-row justify-evenly py-4">
                <p>Canadian Photographer</p>
                <p>Portraits, Families & Weddings</p>
                <p>2022, Limited Liability Company LLC</p>
            </div>
        </div>
    )
}
