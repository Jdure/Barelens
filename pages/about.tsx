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
                    <div className="prose prose-lg prose-slate mx-auto w-5/6 lg:w-full lg:prose-xl">
                    <p className="text-xl sm:text-2xl text-center font-headings">
                        {`Oh, Hi There! I’m ${photographers.name}`}
                    </p>
                    <p>
                        {photographers.bio}
                    </p>
                    <p>View my most recent projects on{" "}
                            <a href="#" className="no-underline text-bold">
                                Instagram!
                            </a>{" "}
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
