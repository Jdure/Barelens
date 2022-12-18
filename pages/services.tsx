import { GetStaticProps } from "next"
import React, { Key } from "react"
import NavBar, { Footer, ImageCard } from "../components"
import { Images } from "../types"
import Image from "next/image"

export default function Services(props: { images: Images[] }) {
    const galleryImages = props.images
    const nums = Array.from({ length: 3 }, (_, i) => i + 1)
    const img = "https://source.unsplash.com/Iz1ae_tdK6k/720x1280"
    return (
        <>
            <div className="flex flex-col py-6 mb-24 px-6">
                <h1 className="py-6 text-center font-body">
                    Memories to last a lifetime
                </h1>
                <h2 className="py-3 text-center">Service Rates</h2>
                <div className="flex flex-wrap">
                    <ImageCard
                        imgPath="https://source.unsplash.com/BOHyxqepP9Y/720x1280"
                        imgTitle="img"
                        plan="Headshot"
                        desc="10 to 20 digitally edited images"
                        price="300$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/Iz1ae_tdK6k/720x1280"
                        imgTitle="img"
                        plan="Couples"
                        desc="10 to 20 digitally edited images"
                        price="300$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/yj4kwA4h_Ms/720x1280"
                        imgTitle="img"
                        plan="Engagement"
                        desc="30 to 50 digitally edited images"
                        price="500$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/Za03n9MIt4s/720x1280"
                        imgTitle="img"
                        plan="Families"
                        desc="50 to 60 digitally edited images"
                        price="500$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/rsGdX91zqiU/720x1280"
                        imgTitle="img"
                        plan="Maternity"
                        desc="50 to 60 digitally edited images"
                        price="600$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/p76UivR30oo/720x1280"
                        imgTitle="img"
                        plan="Newborn"
                        desc="50 to 60 digitally edited images"
                        price="600$"
                    />
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(
        `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                expression: `folder=test`,
            }),
        }
    )
    const { resources } = await res.json()

    const images: Images[] = resources.map(
        (value: {
            public_id: string
            filename: string
            secure_url: string
            width: Number
            height: Number
            created_at: Date
        }) => {
            const { created_at, width, height } = value
            return {
                id: value.public_id,
                title: value.filename,
                image: value.secure_url,
                created_at,
                width,
                height,
            }
        }
    )

    return {
        props: {
            images,
        },
    }
}