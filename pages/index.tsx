import React from "react"
import { GetStaticProps } from "next"
import Image from "next/image"
import { About, Banner, Carousel, Contact, Works } from "../components"
import { getDirectusClient } from "../lib/directus"
import { Images } from "../types"

type ImagesProps = {
    aboutData: typeof Image[]
    carouselData: typeof Image[]
    featuredWorks: typeof Image[]
}

// TODO: Implement types correctly

export default function HomePage({
    carouselData,
    aboutData,
    featuredWorks,
}: any) {
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
    const response = await directus.items("Images").readByQuery({
        fields: [
            "title",
            "id",
            "title",
            "cover_image",
            "description",
            "caption",
            "gallery.directus_files_id",
        ],
    })

    const carouselData = response.data?.filter(
        (item: any) => item.title === "carousel"
    )

    const aboutData = response.data?.filter(
        (item: any) => item.title === "about-section"
    )

    const featuredWorks = response.data?.filter(
        (item: any) => item.title != "about-section" && item.title != "carousel"
    )

    return {
        props: {
            carouselData,
            aboutData,
            featuredWorks,
        },
    }
}
