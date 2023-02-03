import {
    TbBrandInstagram,
    TbBrandTiktok,
    TbBrandFacebook,
} from "react-icons/tb"
import Image from "next/image"

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="bottom-0 w-full relative flex py-2 bg-gray-600">
            <div className="basis-1/4">
                <Image
                    src="/images/White logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-auto pl-1 sm:w-36 sm:mx-4"
                />
            </div>
            <div className="flex items-center justify-around sm:justify-between sm:py-2 sm:px-4 basis-1/2">
                <TbBrandInstagram className="text-white text-xl sm:text-3xl" />

                <TbBrandTiktok className="text-white text-xl sm:text-3xl" />

                <TbBrandFacebook className="text-white text-xl sm:text-3xl" />
            </div>
            <p className="text-white text-xs text-center  py-2 px-4 basis-1/4 sm:text-2xl sm:text-right">
                &copy; {year} Bare Lens
            </p>
        </footer>
    )
}
