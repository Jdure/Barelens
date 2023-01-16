import React from "react"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { getDirectusClient } from "../lib/directus"
import { ImgProps } from "../types"

type ContentProps = {
    carouselData: ImgProps[]
    aboutData: ImgProps[]
    featuredWorks: ImgProps[]
}

const HomeBanner = dynamic(
    () => import("../components/Banner").then((module) => module.Banner),
    {
        ssr: false,
    }
)

const Carousel = dynamic(
    () => import("../components/Carousel").then((module) => module.Carousel),
    {
        ssr: false,
    }
)

const About = dynamic(
    () => import("../components/About").then((module) => module.About),
    {
        ssr: false,
    }
)

const FeaturedWorks = dynamic(
    () => import("../components/Works").then((module) => module.Works),
    {
        ssr: false,
    }
)

const Contact = dynamic(
    () => import("../components/Contact").then((module) => module.Contact),
    {
        ssr: false,
    }
)

export default function HomePage({
    carouselData,
    aboutData,
    featuredWorks,
}: ContentProps) {
    return (
        <div>
            <HomeBanner />
            <Carousel data={carouselData} />
            <About data={aboutData} />
            <FeaturedWorks data={featuredWorks} />
            <Contact />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const directus = await getDirectusClient()
    const response = await directus.items("sections").readByQuery({
        fields: [
            "id",
            "title",
            "caption",
            "description",
            "section_images.primary_image",
            "section_images.image_collection.directus_files_id",
        ],
    })

    const carouselData = response.data?.filter(
        (item: any) => item.title === "carousel"
    )

    const aboutData = response.data?.filter(
        (item: any) => item.title === "about"
    )

    const featuredWorks = response.data?.filter(
        (item: any) => item.title != "about" && item.title != "carousel"
    )

    return {
        props: {
            carouselData,
            aboutData,
            featuredWorks,
        },
    }
}
