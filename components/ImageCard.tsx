import React from "react"
import Image from "next/image"

type ImageCardProps = {
    imgPath: string | null
    imgTitle: string
    price: string
    desc: string
    plan: string | number
}

export function ImageCard({
    imgPath,
    imgTitle,
    price,
    desc,
    plan,
}: ImageCardProps) {
    return (
        <div className="relative h-auto w-full p-3 rounded-sm drop-shadow-md md:w-1/3 hover:drop-shadow-xl">
            <Image
                src={imgPath || ""}
                alt={imgTitle}
                className="h-full w-full object-cover rounded-sm"
                width={720}
                height={1280}
            />
            <div className="absolute inset-0 m-3 rounded-sm flex flex-col items-center justify-around text-transparent ease-in duration-300 sm:m-0 sm:inset-4 hover:text-white hover:backdrop-brightness-50">
                <h3 className="font-headings capitalize">{plan}</h3>
                <p className="text-base text-center font-extrabold sm:text-xl">
                    {desc}
                </p>
                <p className="text-2xl font-extrabold">{price}</p>
            </div>
        </div>
    )
}
