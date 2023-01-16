import { Key } from "react"
import Image from "next/image"
import { Images, ImgProps } from "../types"
import getImageUrl from "../util/getImagesUrl"

export function Works({ data }: Images) {
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
                            className="flex flex-col items-center space-y-2 mb-6 lg:basis-1/2 lg:grow"
                        >
                            <Image
                                className="rounded-sm drop-shadow-2xl w-3/4"
                                src={
                                    getImageUrl(
                                        value.section_images[0]
                                            .primary_image as string,
                                        "default"
                                    ) || ""
                                }
                                width={400}
                                height={400}
                                alt="images"
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
