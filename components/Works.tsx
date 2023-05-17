import { Key, useRef } from "react"
import Image from "next/image"
import { Images, ImgProps } from "../types"
import getImageUrl from "../util/getImagesUrl"
import { useOnScreen } from "../util/useOnScreen"

// TODO: Implement Intersection Observer

export function Works({ data }: Images) {
    const myRef: any = useRef<HTMLDivElement>()
    const OnScreen: boolean = useOnScreen<HTMLDivElement>(myRef, "-300px")

    return (
        <>
            <h2 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Featured
            </h2>
            <p className="text-2xl font-headings text-center sm:text-6xl">
                Projects
            </p>
            <div className="flex flex-wrap justify-center my-6 md:my-12 md:justify-evenly 2xl:flex-nowrap">
                {data.map((value: ImgProps, idx: Key) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center space-y-2 mb-6 w-full sm:w-1/2 md:w-1/3 lg:grow"
                        >
                            <Image
                                className="rounded-sm drop-shadow-2xl w-2/3 sm:w-3/5"
                                src={
                                    getImageUrl(
                                        value.section_images[0]
                                            .primary_image as string,
                                        "default"
                                    ) || ""
                                }
                                loading="lazy"
                                width={400}
                                height={500}
                                alt={value.title}
                            />
                            <p className="text-sm capitalize">{value.title}</p>
                            <p className="text-sm sm:text-base capitalize">
                                {value.caption}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
