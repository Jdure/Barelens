import React from "react"
import { GetStaticProps } from "next"
import { About, Banner, Carousel, Contact, Works } from "../components"
import { getDirectusClient } from "../lib/directus"
import { ImgProps } from "../types"

type ContentProps = {
    carouselData: ImgProps[]
    aboutData: ImgProps[]
    featuredWorks: ImgProps[]
}

export default function HomePage({ carouselData, aboutData, featuredWorks }: ContentProps) {
    console.log(featuredWorks)
    return (
        <div>
            <Banner />
            <Carousel data={carouselData} />
            <About data={aboutData} />
            <Works data={featuredWorks} />
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
