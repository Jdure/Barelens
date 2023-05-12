import {
    TbBrandInstagram,
    TbBrandTiktok,
    TbBrandFacebook,
} from "react-icons/tb"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="bottom-0 w-full relative flex py-2 bg-[#EBD8C3]">
            <div className="basis-1/4">
                <Image
                    src="/images/Black logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-auto pl-1 sm:w-36 sm:mx-4"
                />
            </div>
            <div className="flex items-center justify-around sm:justify-between sm:py-2 sm:px-4 basis-1/2">
                <Link href="https://www.instagram.com/barelensphotos/">
                    <TbBrandInstagram className="text-stone-800 text-xl sm:text-3xl" />
                </Link>

                <TbBrandTiktok className="text-stone-800 text-xl sm:text-3xl" />

                <TbBrandFacebook className="text-stone-800 text-xl sm:text-3xl" />
            </div>
            <p className="text-stone-800 sm:font-bold text-xs text-center  py-2 px-4 basis-1/4 sm:text-2xl sm:text-right">
                &copy; {year} Bare Lens
            </p>
        </footer>
    )
}
