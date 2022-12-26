import React, { Key } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import NavBar, {
    About,
    Banner,
    Carousel,
    Contact,
    Footer,
    Works,
} from "../components"
import { Images } from "../types"

export default function HomePage(props: { images: Images[] }) {
    const bannerImgs = props.images
    return (
        <div>
            <Banner />
            <Carousel data={bannerImgs} />
            <About />
            <Works />
            <Contact />
        </div>
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
                expression: `folder=test AND tags:banner`,
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
