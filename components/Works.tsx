import { Key } from "react"
import "swiper/css"
import Image from "next/image"
import { Images, ImgProps } from "../types"
import getImageUrl from "../util/getImagesUrl"
import { Tooltip } from "./Tooltip"


const getImageUrlFromProps = (value: ImgProps) =>
    getImageUrl(value.section_images[0].primary_image as string, "default") ||
    ""

const renderImage = (
    value: ImgProps,
    width: number,
    height: number,
    classNames: string
) => (
    <Image
        className={classNames}
        src={getImageUrlFromProps(value)}
        loading="lazy"
        width={width}
        height={height}
        alt={value.title}
    />
)

const FeaturedCards = ({ cardValue }: { cardValue: ImgProps }) => (
    <div className="flex flex-col items-center space-y-2 mb-6 w-full sm:w-1/2 md:w-1/3">
        {renderImage(
            cardValue,
            400,
            500,
            "rounded-sm drop-shadow-2xl w-2/3 sm:w-3/5"
        )}
        <p className="text-sm capitalize">{cardValue.title}</p>
        <p className="hidden text-sm sm:block sm:text-base capitalize">
            {cardValue.caption}
        </p>
    </div>
)

export const Works = ({ data }: Images) => (
    <>
        <div className="flex flex-row pl-4 pt-6 justify-center space-x-1  sm:flex-col">
            <h2 className="text-xl lowercase font-headings sm:capitalize sm:text-center sm:font-body sm:text-3xl sm:my-8">
                Latest
            </h2>
            <p className="text-xl lowercase sm:capitalize sm:text-center font-headings sm:text-6xl">
                Projects
            </p>
            <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:my-6 md:my-12 md:justify-evenly 2xl:flex-nowrap">
                {data.map((value: ImgProps, idx: Key) => (
                    <FeaturedCards key={idx} cardValue={value} />
                ))}
            </div>
        </div>
        {/* Mobile images */}
        <div className="container columns-2 gap-3 py-6 w-11/12  mx-auto sm:hidden">
            {data.map((value: ImgProps, idx: Key) => (
                <Tooltip key={idx} msg={value.title}>
                    {renderImage(
                        value,
                        400,
                        400,
                        "rounded-md aspect-square object-cover mb-2"
                    )}
                </Tooltip>
            ))}
        </div>
    </>
)


