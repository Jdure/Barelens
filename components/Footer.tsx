import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="bottom-0 w-full relative flex py-2 bg-[#EBD8C3]">
            <div className="grow">
                <Image
                    src="/images/Black logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-auto pl-1 sm:w-36 sm:mx-4"
                />
            </div>
            <div className="flex flex-none items-center space-x-4 sm:py-2 sm:px-4">
                <Link href="https://www.instagram.com/barelensphotos/">
                    <AiOutlineInstagram className="text-stone-800 text-xl sm:text-3xl" />
                </Link>
                <Link href={"mailto:barelensphotos@gmail.com"}>
                    <AiOutlineMail className="text-stone-800 text-xl sm:text-3xl" />
                </Link>
            </div>
        </footer>
    )
}
