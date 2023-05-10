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
        <div className="relative h-auto w-full p-3 rounded-sm md:w-1/3">
            <Image
                src={imgPath || ""}
                alt={imgTitle}
                className="h-full w-full object-cover rounded-sm"
                width={720}
                height={1280}
            />
            <div className="group absolute bottom-0 inset-x-0 inset-y-3/4 transform duration-700 ease-in-out hover:inset-y-0 hover:-translate-y-0.5 m-3 rounded-sm flex flex-col items-center justify-around text-white font-bold bg-gradient-to-t from-black">
                <h3 className="font-headings capitalize text-3xl">{plan}</h3>
                <p className=" leading-relaxed text-base invisible group-hover:visible transform group-hover:delay-300 text-center sm:text-xl lg:text-3xl">
                    {desc}
                </p>
                <p className="text-2xl lg:text-3xl invisible group-hover:visible transform group-hover:delay-300">
                    {price}
                </p>
            </div>
        </div>
    )
}
