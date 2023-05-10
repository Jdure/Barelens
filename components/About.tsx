import Link from "next/link"
import { Images } from "../types"
import Image from "next/image"
import getImageUrl from "../util/getImagesUrl"

export function About({ data }: Images) {
    const [{ section_images }] = data
    const [imgOne, imgTwo] = section_images[0].image_collection

    return (
        <div className="flex flex-row mt-12 py-4 bg-gray-100">
            <div className="flex flex-col mb-4 sm:items-center basis-1/2">
                <h2 className="text-md leading-normal lowercase text-center text-2xl sm:grow sm:mb-8 sm:text-5xl ">
                    Capturing Life&apos;s Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="rounded-sm drop-shadow-md w-3/4 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgOne.directus_files_id, "default") || ""}
                    width={400}
                    height={400}
                    alt="Picture of Beta M"
                />
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-between sm:justify-center sm:space-y-8">
                <Image
                    className="rounded-sm drop-shadow-md w-3/5 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgTwo.directus_files_id, "default") || ""}
                    width={300}
                    height={300}
                    alt="Beta taking a picture"
                />
                <p className="text-xs text-center sm:text-xl md:text-2xl sm:text-center sm:leading-relaxed md:w-2/3">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits to special
                    occasions, you&apos;ll be able to look back on these moments
                    for years to come. So what are you waiting for?
                </p>
                <p className="text-xs text-center sm:text-xl md:text-2xl sm:leading-relaxed sm:mx-auto">
                    Let&apos;s capture your memories today!
                </p>
                <button className="text-white text-sm w-11/12 h-max font-bold sm:w-1/2 sm:text-xl sm:py-2 sm:px-4 rounded-md bg-gray-400 hover:bg-gray-800">
                    <Link href={"/contact"}>Book A Shoot</Link>
                </button>
            </div>
        </div>
    )
}
