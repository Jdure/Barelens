import React from "react"
import Image from "next/image"
import { getDirectusClient } from "../lib/directus"
import { GetStaticProps } from "next"
import getImageUrl from "../util/getImagesUrl"

type Photographer = {
    id: number
    name: string
    email: string
    instagram_account: string
    tiktok_account: string
    profile_image: string
    bio: string
}

type AboutPageProps = {
    photographers: Photographer
}

export default function AboutPage({ photographers }: AboutPageProps) {
    return (
        <>
            <div className="flex flex-col py-6 mb-6 px-6">
                <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                    Meet the artist behind the lens
                </h1>
                <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                    Capturing the beauty of life&apos;s moments
                </p>
            </div>
            <div className="flex flex-col pb-16 sm:pb-0 sm:py-12 sm:flex-row sm:h-fit">
                <div className="flex flex-col px-6 py-4 sm:basis-1/2 items-center">
                    <Image
                        src={
                            getImageUrl(
                                photographers.profile_image,
                                "default"
                            ) || ""
                        }
                        width={720}
                        height={1280}
                        alt="profile image"
                        className="py-2 rounded-lg drop-shadow-lg w-2/3 sm:w-3/5"
                    />
                </div>
                <div className="flex flex-col sm:justify-center sm:basis-1/2">
                    <p className="py-2 text-2xl font-headings text-center mx-6 sm:pb-8 sm:text-4xl sm:text-start">
                        {`Oh, hi there! I’m ${photographers.name}`}
                    </p>
                    <p className="text-center text-lg leading-relaxed break-words mx-6 sm:text-2xl sm:text-justify">
                        {photographers.bio}
                    </p>
                    <div className="flex flex-row items-center justify-center sm:justify-start mx-6 pt-4 sm:pt-8 ">
                        <p className="text-lg leading-relaxed text-center sm:text-2xl sm:text-justify">
                            View my most recent projects on{" "}
                            <a href="#" className="font-bold">
                                Instagram
                            </a>{" "}
                            !
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const directus = await getDirectusClient()
    const response = await directus.items("photographers").readOne(1)
    return {
        props: {
            photographers: response,
        },
    }
}
