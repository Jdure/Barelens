import Image from "next/image"

export function Banner() {
    return (
        <div className="flex flex-col pt-10 sm:pt-20">
            <Image
                src="/images/Black logo - no background.svg"
                width={50}
                height={50}
                alt="Bare Lens Photography Logo"
                className="w-2/3 mx-auto text-6xl sm:pb-4"
                priority
            />
            <hr className="my-2 mx-auto w-80 h-0 bg-gray-100" />
            <div className="text-xs text-center sm:justify-evenly sm:text-2xl flex flex-row py-4">
                <p>Canadian Photographer</p>
                <p>Portraits, Families & Weddings</p>
                <p>Limited Liability Company LLC</p>
            </div>
        </div>
    )
}
