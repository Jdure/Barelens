import Link from "next/link"
import { Images } from "../types"
import Image from "next/image"
import getImageUrl from "../util/getImagesUrl"

export function About({ data }: Images) {
    const [{ section_images }] = data
    const [imgOne, imgTwo] = section_images[0].image_collection

    return (
        <div className="flex flex-row md:items-center mt-12 py-4 bg-[#FFF6EA] space-x-0">
            <div className="flex flex-col mb-4 sm:items-center w-1/2">
                <h2 className="text-stone-800 leading-normal lowercase text-center text-xl sm:grow sm:mb-8 sm:text-5xl">
                    Capturing Life&apos;s Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="bg-no-repeat bg-center rounded-sm drop-shadow-md w-3/4 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgOne.directus_files_id, "default") || ""}
                    width={300}
                    height={300}
                    alt="Beta taking a picture"
                />
            </div>
            <div className="flex flex-col w-1/2 items-center justify-between sm:justify-center sm:space-y-8">
                <Image
                    className="rounded-sm drop-shadow-md w-3/5 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgTwo.directus_files_id, "default") || ""}
                    width={300}
                    height={300}
                    alt="Picture of Beta M"
                />
                <p className="text-xs text-stone-800 text-center sm:text-xl md:text-2xl sm:leading-relaxed md:w-2/3">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits to special
                    occasions, you&apos;ll be able to look back on these moments
                    for years to come. So what are you waiting for?
                </p>
                <p className="text-xs text-stone-800 text-center sm:text-xl md:text-2xl sm:leading-relaxed sm:mx-auto">
                    Let&apos;s capture your memories today!
                </p>
                <button className="text-stone-800 text-sm w-11/12 h-max font-bold sm:w-1/2 sm:text-xl sm:py-2 sm:px-4 rounded-md bg-[#EBD8C3] hover:bg-[#6B6259] hover:text-white">
                    <Link href="/contact">Book Now</Link>
                </button>
            </div>
        </div>
    )
}
