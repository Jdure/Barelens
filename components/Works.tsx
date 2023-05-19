import { Key } from "react"
import "swiper/css"
import Image from "next/image"
import { Images, ImgProps } from "../types"
import getImageUrl from "../util/getImagesUrl"

/* 
TODO:
1. Add Tool tip to images
2. Remove redundancy

 */

const FeaturedCards = ({ cardValue }: { cardValue: ImgProps }) => {
    return (
        <div className="flex flex-col items-center space-y-2 mb-6 w-full sm:w-1/2 md:w-1/3">
            <Image
                className="rounded-sm drop-shadow-2xl w-2/3 sm:w-3/5"
                src={
                    getImageUrl(
                        cardValue.section_images[0].primary_image as string,
                        "default"
                    ) || ""
                }
                loading="lazy"
                width={400}
                height={500}
                alt={cardValue.title}
            />
            <p className="text-sm capitalize">{cardValue.title}</p>
            <p className="hidden text-sm sm:block sm:text-base capitalize">
                {cardValue.caption}
            </p>
        </div>
    )
}

export function Works({ data }: Images) {
    return (
        <>
            <div className="flex flex-row pl-4 pt-6 justify-center space-x-1  sm:flex-col">
                <h2 className="text-xl lowercase font-headings sm:capitalize sm:text-center sm:font-body sm:text-3xl sm:my-8">
                    Latest
                </h2>
                <p className="text-xl lowercase sm:capitalize sm:text-center font-headings sm:text-6xl">
                    Projects
                </p>
                <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:my-6 md:my-12 md:justify-evenly 2xl:flex-nowrap">
                    {data.map((value: ImgProps, idx: Key) => {
                        return <FeaturedCards key={idx} cardValue={value} />
                    })}
                </div>
            </div>
            {/* Mobile images */}
            <div className="container columns-2 gap-3 py-6 w-11/12  mx-auto sm:hidden">
                {data.map((value: ImgProps, idx: Key) => {
                    return (
                        <Image
                            key={idx}
                            className="rounded-md aspect-square object-cover mb-2"
                            src={
                                getImageUrl(
                                    value.section_images[0]
                                        .primary_image as string,
                                    "default"
                                ) || ""
                            }
                            loading="lazy"
                            width={400}
                            height={400}
                            alt={value.title}
                        />
                    )
                })}
            </div>
        </>
    )
}
